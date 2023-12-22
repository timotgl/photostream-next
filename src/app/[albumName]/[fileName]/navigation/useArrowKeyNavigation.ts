import { useEffect } from 'react';

export default function useArrowKeyNavigation(showPreviousPhoto: Function, showNextPhoto: Function) {
  const actionsForKeyDown: {[keyName: string]: Function} = {
    ArrowRight: showPreviousPhoto,
    ArrowLeft: showNextPhoto,
    ArrowUp: showNextPhoto,
    ArrowDown: showPreviousPhoto,
  };

  const onKeyDown = (keyDownEvent: KeyboardEvent) => {
    const { key } = keyDownEvent;
    const action = actionsForKeyDown[key];
    if (action) {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  });
};
