import useApi from '@hooks/useApi';

const useLikeMessage = () => {
  const { callApi } = useApi({ api: 'feature/ai/message/like', method: 'PUT' });

  const likeMessageHandler = (messageId: string) => {
    const payload = {
      messageId,
    };

    callApi(payload);
  };

  return { likeMessageHandler };
};

export default useLikeMessage;
