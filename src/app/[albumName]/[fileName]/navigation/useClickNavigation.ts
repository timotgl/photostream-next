import { useEffect } from 'react';

export default function useClickNavigation(showPreviousPhoto: Function, showNextPhoto: Function) {
  const onClick = (event: Event): void => {
    const isClickInsideLeftHalfOfWindow: boolean = window.innerWidth / 2 > (event as MouseEvent).clientX;
    if (isClickInsideLeftHalfOfWindow) {
      showNextPhoto();
    } else {
      showPreviousPhoto();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    }
  });
};
