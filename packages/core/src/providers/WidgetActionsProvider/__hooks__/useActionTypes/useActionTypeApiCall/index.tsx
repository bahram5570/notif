import { pwaHttp } from '../../../../../utils/pwaHttp';

// import useUpdateCycleCard from '@hooks/__cycle__/useUpdateCycleCard';

import useActionComplete from '../useActionComplete';
import { UseActionTypeApiCallTypes } from './types';

const useActionTypeApiCall = ({ onActionComplete, onCallBack }: UseActionTypeApiCallTypes) => {
  // const { cycleCardStatusHandler } = useUpdateCycleCard();
  const { onComplete } = useActionComplete(onActionComplete);

  const callApiCallHandler = async (url: string) => {
    const { data } = await pwaHttp({ url, method: 'GET' });

    // todo : handle cycle update & check 'onComplete' is ok
    if (data) {
      onCallBack('cycle');
      // const isCyclePage = location.pathname.includes('cycle');
      // if (isCyclePage) {
      // cycleCardStatusHandler('refetch');
      // }
    }

    onComplete();
  };

  return { callApiCallHandler };
};

export default useActionTypeApiCall;
