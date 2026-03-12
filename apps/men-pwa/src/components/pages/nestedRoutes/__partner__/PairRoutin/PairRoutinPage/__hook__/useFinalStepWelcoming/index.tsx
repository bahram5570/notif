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
  const searchData = `id=${programId}&WomanStatus=${1}&wc=${false}`;

  const successHandler = () => {
    const payload = { ...dataRoutinItems, wc: { ...dataRoutinItems?.wc, isActive: false } };
    updateQuery({ queryKey: ['pairRoutinItems'], payload });

    // sequenceHandler([
    //   `/protected/partner`,
    //   `/protected/partner`,
    //   `/protected/partner`,
    //   `/protected/pairRoutin?searchData=${encodeURIComponent(searchData)}`,
    // ]);
  };

  const { callApi, isLoading: finalStepLoading } = usePwaApi({
    method: 'POST',

    onSuccess: successHandler,
    api: `widgets/manprogram/welcom`,
  });

  const finalStepHandler = () => {
    const payload = {
      programId,
    };
    callApi(payload);
  };

  return { finalStepHandler, finalStepLoading };
};

export default useFinalStepWelcoming;
