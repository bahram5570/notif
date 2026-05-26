import { useEffect } from 'react';

import { PHASE_CHANGE_FIRST_PATH_NAME } from '@providers/PhaseChangeProvider/constants';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

const usePhaseChangeReloadProtection = () => {
  const router = useCustomRouter();

  useEffect(() => {
    const pathname = location.pathname;
    const pathnameList = pathname.split('/');
    const currentPath = pathnameList[pathnameList.length - 1];
    const result = pathname.replace(currentPath, PHASE_CHANGE_FIRST_PATH_NAME);

    const queryParams = location.search;

    router.push(result + queryParams);
  }, []);
};

export default usePhaseChangeReloadProtection;
