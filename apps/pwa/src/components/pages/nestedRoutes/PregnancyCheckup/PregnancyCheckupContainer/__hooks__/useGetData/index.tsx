import { APP_VERSION } from '@constants/app.constants';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const { data, isLoading } = usePwaApi<ResponsePropsType>({
    method: 'GET',
    queryKey: ['pregnancyCheckuplist'],
    api: `info/pregnancy/checkups?AppVersion=${APP_VERSION || ''}`,
  });
  return { data, isLoading };
};

export default useGetData;
