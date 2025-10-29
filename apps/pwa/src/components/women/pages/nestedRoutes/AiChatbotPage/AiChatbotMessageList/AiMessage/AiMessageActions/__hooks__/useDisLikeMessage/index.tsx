import useApi from '@hooks/useApi';

const useDisLikeMessage = () => {
  const { callApi } = useApi({ api: 'feature/ai/message/dislike', method: 'PUT' });

  const disLikeMessageHandler = (messageId: string) => {
    const payload = {
      messageId,
    };

    callApi(payload);
  };

  return { disLikeMessageHandler };
};

export default useDisLikeMessage;
