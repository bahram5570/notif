import { useEffect, useState } from 'react';

import { NEED_TOAST_PATH_LIST } from '@constants/routes.constants';
import { usePathname } from 'next/navigation';

const useHasSignsChanged = () => {
  const [hasSignsChanged, setHasSignsChanged] = useState(false);
  const pathname = usePathname();

  const changeSignsStaus = () => {
    setHasSignsChanged(true);
  };

  useEffect(() => {
    const isNeedDatePath = NEED_TOAST_PATH_LIST.some((item) => pathname.includes(item));

    if (!isNeedDatePath) setHasSignsChanged(false);
  }, [pathname]);

  return { hasSignsChanged, changeSignsStaus };
};

export default useHasSignsChanged;
