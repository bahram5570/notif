import { useEffect, useState } from 'react';

import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';
import useApi from '@hooks/useApi';

import useEventSource from '../useEventSource';
import useShowErrorMessage from '../useShowErrorMessage';
import useStreamLoading from '../useStreamLoading';
import { NewMessageResponse, SubmitHandlerType } from './type';

const useSubmit = () => {
  const { categoryIdData, itemIdData, addChatHandler, updateChatHandler, updateObject, chatData } =
    useAichatbotHistoryManager();
  const { showErrorMessage, showErrorMessageHandler } = useShowErrorMessage();
  const [messageId, setMessageId] = useState('');
  const { streamLoading, streamLoadingHandler } = useStreamLoading();

  const { streamHandler, messages } = useEventSource({
    handelLoading: streamLoadingHandler,
    errorHandler: showErrorMessageHandler,
  });

  const successHandler = (v: NewMessageResponse) => {
    const newObj = {
      ...v,
      activaMedia: chatData?.imageUsageLimit === chatData?.currentImageUsage ? false : chatData?.activaMedia,
    };

    updateObject(newObj);
    setMessageId(v.messageId);
    streamHandler({ id: v.messageId });
  };

  const { callApi, isLoading: loading } = useApi<NewMessageResponse>({
    method: 'POST',
    api: 'feature/ai/v2/sendstreammessage',
    onSuccess: (v: NewMessageResponse) => successHandler(v),
    onError: () => streamLoadingHandler(false),
  });

  const submitHandler: SubmitHandlerType = ({ prompt, imageId }) => {
    if (showErrorMessage) showErrorMessageHandler(false);

    addChatHandler({ chat: prompt, imageId: imageId });

    const payload = {
      promptCategoryId: categoryIdData || '',
      promptItemId: itemIdData || '',
      prompt,
      imageId,
    };

    callApi(payload);
  };

  const onErrorHandler = () => {
    showErrorMessageHandler(false);
    streamHandler({ id: messageId });
    streamLoadingHandler(true);
  };

  useEffect(() => {
    if (!messages) return;
    updateChatHandler(messages, messageId);
  }, [messages]);

  useEffect(() => {
    if (loading) streamLoadingHandler(true);
  }, [loading]);

  const isLoading = streamLoading;

  return { submitHandler, isLoading, showErrorMessage, onErrorHandler };
};

export default useSubmit;
