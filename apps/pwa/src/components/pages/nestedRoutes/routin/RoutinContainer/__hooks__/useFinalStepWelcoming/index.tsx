import useProfileData from '@hooks/__profile__/useProfileData';
import useApi from '@hooks/useApi';
import { useRouteSequence } from '@repo/core/hooks/useRouteSequence';

import { UseFinalStepWelcomingPropsType } from './type';

const useFinalStepWelcoming = ({ programId }: UseFinalStepWelcomingPropsType) => {
  const { profileData } = useProfileData();
  const { sequenceHandler } = useRouteSequence();

  const searchData = `id=${programId}&WomanStatus=${profileData?.status}&wc=${false}`;

  const successHandler = () => {
    sequenceHandler([
      `/protected/cycle`,
      `/protected/cycle`,
      `/protected/cycle`,
      `/protected/routin?searchData=${encodeURIComponent(searchData)}`,
    ]);
  };

  const { callApi, isLoading: finalStepLoading } = useApi({
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['routinWelcom'],
    api: `widgets/program/welcom/${programId}`,
  });

  const finalStepHandler = () => {
    callApi();
  };

  return { finalStepHandler, finalStepLoading };
};

export default useFinalStepWelcoming;
