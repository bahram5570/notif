import { useEffect, useRef, useState } from 'react';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';

const useExperiencesHeight = () => {
  const [height, setHeight] = useState(0);
  const startingELementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = startingELementRef.current;

    if (el) {
      const totalHeight = document.body.clientHeight;
      const result = totalHeight - FOOTER_HEIGHT;
      setHeight(result);
    }
  }, []);

  return { startingELementRef, height };
};

export default useExperiencesHeight;
