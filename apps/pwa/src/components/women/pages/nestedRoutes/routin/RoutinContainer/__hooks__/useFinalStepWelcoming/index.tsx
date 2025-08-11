import useProfileData from '@hooks/__profile__/useProfileData';
import useApi from '@hooks/useApi';
import useRouteSequence from '@hooks/useRouteSequence';

import { UseFinalStepWelcomingPropsType } from './type';

const useFinalStepWelcoming = ({ programId }: UseFinalStepWelcomingPropsType) => {
  const { profileData } = useProfileData();
  const { sequenceHandler } = useRouteSequence();

  const searchData = `id=${programId}&WomanStatus=${profileData?.status}&wc=${false}`;

  const { callApi, isLoading: finalStepLoading } = useApi({
    api: `widgets/program/welcom/${programId}`,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['routinWelcom'],
    onSuccess: () => {
      sequenceHandler([
        `/protected/cycle?dummyData=${Math.random()}`,
        `/protected/cycle?dummyData=${Math.random()}`,
        `/protected/cycle?dummyData=${Math.random()}`,
        `/protected/routin?searchData=${encodeURIComponent(searchData)}&dummyData=${Math.random()}`,
      ]);
    },
  });

  const finalStepHandler = () => {
    callApi();
  };

  return { finalStepHandler, finalStepLoading };
};

export default useFinalStepWelcoming;
