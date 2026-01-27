import { APP_VERSION } from '@constants/app.constants';
import useApi from '@hooks/useApi';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const { data, isLoading } = useApi<ResponsePropsType>({
    method: 'GET',
    queryKey: ['pregnancyCheckuplist'],
    api: `info/pregnancy/checkups?AppVersion=${APP_VERSION || ''}`,
  });
  return { data, isLoading };
};

export default useGetData;
