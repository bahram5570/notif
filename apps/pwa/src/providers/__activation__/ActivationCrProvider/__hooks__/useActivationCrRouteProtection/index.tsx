import { useEffect } from 'react';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import { ACTIVATION_CR_FIRST_PATH } from '../../__constants__/activationCrContants';

const useActivationCrRouteProtection = () => {
  const router = useCustomRouter();

  useEffect(() => {
    sessionStorage.clear();
    router.push(ACTIVATION_CR_FIRST_PATH);
  }, []);
};

export default useActivationCrRouteProtection;
