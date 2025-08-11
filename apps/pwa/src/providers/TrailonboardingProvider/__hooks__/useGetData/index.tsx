import { APP_VERSION } from '@constants/app.constants';
import useApi from '@hooks/useApi';

import { TrailonboardingResponseType } from './type';

const useGetData = () => {
  const { data, isLoading } = useApi<TrailonboardingResponseType>({
    api: `feature/trailonboarding/page?day=0&status=1&periodStatus=2&appVersion=${APP_VERSION}`,
    method: 'GET',
    queryKey: ['trailonboardingData'],
  });

  return { data, isLoading };
};

export default useGetData;
