import { useEffect } from 'react';

export const useOverflowHandler = (isMount?: boolean) => {
  useEffect(() => {
    const el = document.body;

    if (isMount === undefined) {
      el.style.overflow = 'hidden';
    } else {
      if (isMount === true) {
        el.style.overflow = 'hidden';
      }
    }

    return () => {
      el.style.overflow = '';
    };
  }, [isMount]);
};
