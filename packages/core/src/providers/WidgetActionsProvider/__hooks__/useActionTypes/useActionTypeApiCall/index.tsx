import { pwaHttp } from '../../../../../utils/pwaHttp';

import useActionComplete from '../useActionComplete';
import { UseActionTypeApiCallTypes } from './types';

const useActionTypeApiCall = ({ onActionComplete, onCallBack }: UseActionTypeApiCallTypes) => {
  const { onComplete } = useActionComplete(onActionComplete);

  const callApiCallHandler = async (url: string) => {
    const { data } = await pwaHttp({ url, method: 'GET' });

    if (data && onCallBack) {
      onCallBack('cycle');
    }

    onComplete();
  };

  return { callApiCallHandler };
};

export default useActionTypeApiCall;
