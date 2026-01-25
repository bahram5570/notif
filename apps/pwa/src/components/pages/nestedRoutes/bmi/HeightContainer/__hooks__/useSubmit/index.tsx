import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useWidgetActions from '@hooks/useWidgetActions';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import { multipleStepRoutes } from '../../../multipleStepRoutes';

const useSubmit = () => {
  const { actionHandler } = useWidgetActions();
  const { getQueryParams } = useQueryParamsHandler();
  const { updateProfileDateByDellay } = useGetProfileData();

  const onSuccessHandler = () => {
    const nextrout = getQueryParams('nextrout');
    actionHandler(multipleStepRoutes(nextrout));

    updateProfileDateByDellay();
  };

  const { callApi, isLoading } = useApi({
    method: 'PUT',
    onSuccess: onSuccessHandler,
    api: 'profile/woman/info/setheight',
  });

  const submitHandler = (height: number) => {
    const payload = {
      height,
    };
    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
