import useProfileData from '@hooks/__profile__/useProfileData';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useRouteSequence from '@hooks/useRouteSequence';

import { PairRoutinResponsive } from '../useGetData/type';
import { UseFinalStepWelcomingPropsType } from './type';

const useFinalStepWelcoming = ({ programId }: UseFinalStepWelcomingPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const { profileData } = useProfileData();
  const { sequenceHandler } = useRouteSequence();

  const dataRoutinItems = getQuery<PairRoutinResponsive>({ queryKey: ['pairRoutinItems'] });
  const searchData = `id=${programId}&WomanStatus=${profileData?.status}&wc=${false}`;

  const { callApi, isLoading: finalStepLoading } = useApi({
    api: `widgets/program/welcom/${programId}`,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['pairRoutinWelcom'],
    onSuccess: () => {
      const payload = { ...dataRoutinItems, wc: { ...dataRoutinItems?.wc, isActive: false } };
      updateQuery({ queryKey: ['pairRoutinItems'], payload });

      sequenceHandler([
        `/protected/partner?dummyData=${Math.random()}`,
        `/protected/partner?dummyData=${Math.random()}`,
        `/protected/partner?dummyData=${Math.random()}`,
        `/protected/pairRoutin?searchData=${encodeURIComponent(searchData)}&dummyData=${Math.random()}`,
      ]);
    },
  });

  const finalStepHandler = () => {
    callApi();
  };

  return { finalStepHandler, finalStepLoading };
};

export default useFinalStepWelcoming;
