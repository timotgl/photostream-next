import { useState, useEffect } from 'react';

import { whileZoomedOut, onSingleTouchPoint } from '@/lib/touchEvents';

enum Direction {
  None,
  Start,
  Right,
  Left,
}

export default function useTouchNavigation(showPreviousPhoto: Function, showNextPhoto: Function) {
  const [swipeX, setSwipeX] = useState<number>(0);
  const [swipeDir, setSwipeDir] = useState<Direction>(Direction.None);
  const [swipeOpacity, setSwipeOpacity] = useState<number>(1);

  const onTouchStart = (touch: Touch) => {
    setSwipeX(touch.clientX);
    setSwipeDir(Direction.Start);
  };

  const updateSwipingState = (clientX: number) => {
    setSwipeX(clientX);
    const reducedSwipeOpacity = swipeOpacity - 0.05;
    setSwipeOpacity(reducedSwipeOpacity);
    document.body.style['opacity'] = String(reducedSwipeOpacity);
  };

  const onSwipeStart = (clientX: number) => {
    if (clientX > swipeX) {
      // Swiping to the right has just started
      setSwipeDir(Direction.Right);
    } else if (clientX < swipeX) {
      // Swiping to the left has just started
      setSwipeDir(Direction.Left);
    }
    setSwipeX(clientX);
  };

  const onSwipeRight = (clientX: number) => {
    if (clientX > swipeX) {
      // Swiping to the right continues
      updateSwipingState(clientX);
    } else if (clientX < swipeX) {
      // Direction has changed to left, abort
      resetSwiping();
    }
  };

  const onSwipeLeft = (clientX: number) => {
    if (clientX < swipeX) {
      // Swiping to the left continues
      updateSwipingState(clientX);
    } else if (clientX > swipeX) {
      // Direction has changed to right, abort
      resetSwiping();
    }
  };

  const onTouchMove = (touch: Touch) => {
    const { clientX } = touch;

    switch (swipeDir) {
      case Direction.Start:
        onSwipeStart(clientX);
        break;
      case Direction.Right:
        onSwipeRight(clientX);
        break;
      case Direction.Left:
        onSwipeLeft(clientX);
    }
  };

  const onTouchEnd = () => {
    switch (swipeDir) {
      case Direction.Right:
        resetSwiping();
        showNextPhoto();
        break;
      case Direction.Left:
        resetSwiping();
        showPreviousPhoto();
    }
  };

  const resetSwiping = () => {
    setSwipeX(0);
    setSwipeDir(Direction.None);
    setSwipeOpacity(1);
    document.body.style['opacity'] = '1';
  };

  const onZoomedOutSingleTouchStart = (touchEvent: TouchEvent) => {
    whileZoomedOut(onSingleTouchPoint(onTouchStart, resetSwiping))(touchEvent);
  };

  const onZoomedOutSingleTouchMove = (touchEvent: TouchEvent) => {
    whileZoomedOut(onSingleTouchPoint(onTouchMove, resetSwiping))(touchEvent);
  };

  useEffect(() => {
    // Swipe left/right navigation
    document.addEventListener('touchstart', onZoomedOutSingleTouchStart);
    document.addEventListener('touchmove', onZoomedOutSingleTouchMove);
    document.addEventListener('touchend', onTouchEnd);
    document.addEventListener('touchcancel', resetSwiping);

    return () => {
      document.removeEventListener('touchstart', onZoomedOutSingleTouchStart);
      document.removeEventListener('touchmove', onZoomedOutSingleTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchcancel', resetSwiping);
    }
  });
};
