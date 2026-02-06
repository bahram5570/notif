import { currentDate } from '@repo/core/utils/dates';

import { multipleStepRoutes } from '@components/pages/nestedRoutes/bmi/multipleStepRoutes';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';

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

  const { callApi, isLoading } = usePwaApi({ api: 'info/woman/weight', method: 'POST', onSuccess: onSuccessHandler });

  const submitHandler = (weight: number) => {
    const payload = { date: gDate, weight };
    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
