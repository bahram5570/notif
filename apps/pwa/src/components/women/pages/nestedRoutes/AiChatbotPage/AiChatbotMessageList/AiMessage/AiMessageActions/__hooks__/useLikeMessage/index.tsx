import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { ChatType } from '../../../../type';

const useLikeMessage = ({ messageId }: { messageId: string }) => {
  const { getQuery, updateQuery } = useCustomReactQuery(['AiChatMessageList']);

  const aiChatMessageList = getQuery<{ data: ChatType[] }>({ queryKey: ['AiChatMessageList'] });

  const { callApi } = useApi({ api: 'feature/ai/message/like', method: 'PUT' });

  const likeMessageHandler = () => {
    if (aiChatMessageList) {
      const updatedList = aiChatMessageList.data.map((item) =>
        item.messageId === messageId ? { ...item, like: true, dislike: false } : item,
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

  return { likeMessageHandler };
};

export default useLikeMessage;
