import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRefetchChat } from '@repo/core/hooks/useRefetchChat';

import { ResponseMessageDataType } from '../../MessageListContainer/Message/type';
import { UseGetNewMessageDataPropsType } from './type';

const useGetNewMessageData = ({
  lastMessageId,
  messageHandler,
  chatToken,
  timeInterval,
}: UseGetNewMessageDataPropsType) => {
  const onSuccess = (v: ResponseMessageDataType) => {
    messageHandler(v.items);
    if (v.items.length > 0) {
      restHandler();
    }
  };

  const {
    callApi,
    isLoading: messageLoading,
    data,
  } = usePwaApi<ResponseMessageDataType>({ api: 'pair/chat/newone', method: 'POST', onSuccess: (v) => onSuccess(v) });

  const getNewMessageData = () => {
    if (lastMessageId) {
      const payload = {
        messageId: lastMessageId,
        token: chatToken,
      };

      callApi(payload);
    }
  };

  const { restHandler } = useRefetchChat({
    initialInterval: timeInterval,
    isLoading: messageLoading,
    onCallBack: getNewMessageData,
    lastMessageId,
  });

  return { restHandler, messageLoading };
};

export default useGetNewMessageData;
