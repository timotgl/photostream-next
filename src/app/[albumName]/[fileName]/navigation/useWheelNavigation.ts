import { useEffect } from 'react';

export default function useWheelNavigation(showPreviousPhoto: Function, showNextPhoto: Function) {
  // Fires when the user rotates a wheel button on a pointing device (typically a mouse).
  const onWheel = (wheelEvent: Event): void => {
    const delta = Math.max(-1, Math.min(1, (wheelEvent as WheelEvent).deltaY));
    if (delta <= 0) {
      showNextPhoto();
    } else {
      showPreviousPhoto();
    }
  };

  useEffect(() => {
    document.addEventListener('wheel', onWheel);

    return () => {
      document.removeEventListener('wheel', onWheel);
    }
  });
};
