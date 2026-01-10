import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import useCustomToast from '@hooks/useCustomToast';

const useExplanation = () => {
  const { onToast } = useCustomToast();
  const isFirstTime = useRef(isDevelopeMode());

  useEffect(() => {
    // if (isFirstTime) {
    //   isFirstTime.current = false;
    //   return;
    // }

    // onToast({ message: 'یک متن تست برای این اوضاع', duration: 100000000 });
  }, []);
};

export default useExplanation;
