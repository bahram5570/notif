import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';
import useApi from '@hooks/useApi';

const useDisLikeMessage = (messageId: string) => {
  const { chatData, updateObject } = useAichatbotHistoryManager();
  const { callApi } = useApi({ api: 'feature/ai/message/dislike', method: 'PUT' });

  const disLikeMessageHandler = () => {
    if (chatData) {
      const updatedList = chatData.chats.map((item) =>
        item.messageId === messageId ? { ...item, like: false, dislike: true } : item,
      );

      updateObject({ chats: updatedList });
    }
    const payload = {
      messageId,
    };

    callApi(payload);
  };

  return { disLikeMessageHandler };
};

export default useDisLikeMessage;
