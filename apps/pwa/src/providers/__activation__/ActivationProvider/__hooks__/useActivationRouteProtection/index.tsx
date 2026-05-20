import { useEffect } from 'react';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import { ACTIVATION_FIRST_PATH } from '../../__constants__/activationContants';

const useActivationRouteProtection = () => {
  const router = useCustomRouter();

  useEffect(() => {
    sessionStorage.clear();
    router.push(ACTIVATION_FIRST_PATH);
  }, []);
};

export default useActivationRouteProtection;
