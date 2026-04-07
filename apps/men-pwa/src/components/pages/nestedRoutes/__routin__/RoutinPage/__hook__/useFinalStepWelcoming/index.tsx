import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouteSequence } from '@repo/core/hooks/useRouteSequence';

import { SEARCH_DATA } from '../../constant';
import { PairRoutinResponsive } from '../useGetData/type';
import { UseFinalStepWelcomingPropsType } from './type';

const useFinalStepWelcoming = ({ programId }: UseFinalStepWelcomingPropsType) => {
  const { sequenceHandler } = useRouteSequence();
  const { getQuery, updateQuery } = useCustomReactQuery();

  const dataRoutinItems = getQuery<PairRoutinResponsive>({ queryKey: ['manHealthProgram'] });
  const sessionStrogeData = sessionStorage.getItem(SEARCH_DATA);
  const searchDataParam = sessionStrogeData && JSON.parse(sessionStrogeData);

  const searchData = `${searchDataParam}&wc=${false}`;

  const successHandler = () => {
    const payload = { ...dataRoutinItems, wc: { ...dataRoutinItems?.wc, isActive: false } };
    updateQuery({ queryKey: ['manHealthProgram'], payload });
    sessionStorage.removeItem(SEARCH_DATA);
    sequenceHandler([
      `/protected/knowledge`,
      `/protected/knowledge`,
      `/protected/knowledge`,
      `/protected/routin?searchData=${encodeURIComponent(searchData)}`,
    ]);
  };

  const { callApi, isLoading: finalStepLoading } = usePwaApi({
    method: 'POST',

    onSuccess: successHandler,
    api: `widgets/manhealthprogram/welcom`,
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
