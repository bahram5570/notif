import { APP_VERSION } from '@constants/app.constants';
import useApi from '@hooks/useApi';

import { FeatureIntroResponseType } from './type';

const useGetData = () => {
  const { data, isLoading } = useApi<FeatureIntroResponseType>({
    api: `feature/trailonboarding/page?day=1&status=1&periodStatus=2&appVersion=${APP_VERSION}`,
    method: 'GET',
    queryKey: ['trailonboardingData'],
  });

  return { data, isLoading };
};

export default useGetData;
