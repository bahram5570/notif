import useProfileData from '@hooks/__profile__/useProfileData';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouteSequence } from '@repo/core/hooks/useRouteSequence';

import { PairRoutinResponsive } from '../useGetData/type';
import { UseFinalStepWelcomingPropsType } from './type';

const useFinalStepWelcoming = ({ programId }: UseFinalStepWelcomingPropsType) => {
  const { profileData } = useProfileData();
  const { sequenceHandler } = useRouteSequence();
  const { getQuery, updateQuery } = useCustomReactQuery();

  const dataRoutinItems = getQuery<PairRoutinResponsive>({ queryKey: ['pairRoutinItems'] });
  const searchData = `id=${programId}&WomanStatus=${profileData?.status}&wc=${false}`;

  const successHandler = () => {
    const payload = { ...dataRoutinItems, wc: { ...dataRoutinItems?.wc, isActive: false } };
    updateQuery({ queryKey: ['pairRoutinItems'], payload });

    sequenceHandler([
      `/protected/partner`,
      `/protected/partner`,
      `/protected/partner`,
      `/protected/pairRoutin?searchData=${encodeURIComponent(searchData)}`,
    ]);
  };

  const { callApi, isLoading: finalStepLoading } = usePwaApi({
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['pairRoutinWelcom'],
    api: `widgets/program/welcom/${programId}`,
  });

  const finalStepHandler = () => {
    callApi();
  };

  return { finalStepHandler, finalStepLoading };
};

export default useFinalStepWelcoming;
