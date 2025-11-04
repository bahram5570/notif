import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { ChatType } from '../../../../type';

const useDisLikeMessage = (messageId: string) => {
  const { getQuery, updateQuery } = useCustomReactQuery(['AiChatMessageList']);
  const aiChatMessageList = getQuery<{ data: ChatType[] }>({ queryKey: ['AiChatMessageList'] });

  const { callApi } = useApi({ api: 'feature/ai/message/dislike', method: 'PUT' });

  const disLikeMessageHandler = () => {
    if (aiChatMessageList) {
      const updatedList = aiChatMessageList.data.map((item) =>
        item.messageId === messageId ? { ...item, like: false, dislike: true } : item,
      );

      updateQuery({
        queryKey: ['AiChatMessageList'],
        payload: { data: updatedList },
      });
    }
    const payload = {
      messageId,
    };

    callApi(payload);
  };

  return { disLikeMessageHandler };
};

export default useDisLikeMessage;
