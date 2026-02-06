import useWidgetActions from '@hooks/useWidgetActions';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

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

  const { callApi, isLoading } = usePwaApi({
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
