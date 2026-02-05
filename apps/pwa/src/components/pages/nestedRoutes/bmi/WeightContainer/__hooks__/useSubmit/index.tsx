import { currentDate } from '@repo/core/utils/dates';

import { multipleStepRoutes } from '@components/pages/nestedRoutes/bmi/multipleStepRoutes';
import useApi from '@hooks/useApi';
import useWidgetActions from '@hooks/useWidgetActions';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const { gDate } = currentDate();

const useSubmit = () => {
  const { actionHandler } = useWidgetActions();
  const { getQueryParams } = useQueryParamsHandler();
  const { updateProfileDateByDellay } = useGetProfileData();

  const onSuccessHandler = () => {
    const nextrout = getQueryParams('nextrout');
    actionHandler(multipleStepRoutes(nextrout));

    updateProfileDateByDellay();
  };

  const { callApi, isLoading } = useApi({ api: 'info/woman/weight', method: 'POST', onSuccess: onSuccessHandler });

  const submitHandler = (weight: number) => {
    const payload = { date: gDate, weight };
    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
