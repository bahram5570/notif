import { useEffect, useRef, useState } from 'react';

import { SizesTypes } from './types';

const useSizes = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sizes, setSized] = useState<SizesTypes | null>(null);

  useEffect(() => {
    const el = ref.current;

    if (el && sizes === null) {
      setSized({ width: el.clientWidth, height: el.clientHeight });
    }
  }, [sizes]);

  return { ref, sizes };
};

export default useSizes;
