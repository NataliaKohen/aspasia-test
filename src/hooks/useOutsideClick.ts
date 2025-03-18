import { useEffect, useRef, useCallback } from 'react';

function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);

  return ref;
}

export default useOutsideClick;
