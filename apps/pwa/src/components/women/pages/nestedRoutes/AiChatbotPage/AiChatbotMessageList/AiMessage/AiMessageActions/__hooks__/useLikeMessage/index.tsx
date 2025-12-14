import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';
import useApi from '@hooks/useApi';

const useLikeMessage = ({ messageId }: { messageId: string }) => {
  const { chatData, updateObject } = useAichatbotHistoryManager();

  const { callApi } = useApi({ api: 'feature/ai/message/like', method: 'PUT' });

  const likeMessageHandler = () => {
    if (chatData) {
      const updatedList = chatData.chats.map((item) =>
        item.messageId === messageId ? { ...item, like: true, dislike: false } : item,
      );

      updateObject({ chats: updatedList });
    }
    const payload = {
      messageId,
    };

    callApi(payload);
  };

  return { likeMessageHandler };
};

export default useLikeMessage;
