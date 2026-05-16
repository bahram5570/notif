import { useEffect, useState } from 'react';

const useIsInitialRendered = () => {
  const [isInitialRendered, setIsInitialRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialRendered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return isInitialRendered;
};

export default useIsInitialRendered;
