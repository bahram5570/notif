import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { PayloadTypes } from './type';

const useReadMessage = () => {
  const { refetchQuery } = useCustomReactQuery();

  const successHandler = () => {
    refetchQuery({ queryKey: ['messageNotRead'] });
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'POST',
    onSuccess: successHandler,
    api: 'message',
  });

  const readMessageHandler = ({ messageIds }: PayloadTypes) => {
    const payload = {
      messageIds,
    };
    callApi(payload);
  };

  return { readMessageHandler, isLoading };
};

export default useReadMessage;
