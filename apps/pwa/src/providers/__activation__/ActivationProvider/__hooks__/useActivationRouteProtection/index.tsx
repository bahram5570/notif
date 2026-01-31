import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { ACTIVATION_FIRST_PATH } from '../../__constants__/activationContants';

const useActivationRouteProtection = () => {
  const router = useRouter();

  useEffect(() => {
    sessionStorage.clear();
    router.push(ACTIVATION_FIRST_PATH);
  }, []);
};

export default useActivationRouteProtection;
