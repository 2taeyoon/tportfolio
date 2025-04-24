import { useCallback } from 'react';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((ref: React.RefObject<HTMLElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return { scrollToSection };
};