import { useEffect, useState } from 'react';

import { getSessionStoragePromptText } from '@utils/aiChatbot';

import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';
import useApi from '@hooks/useApi';

import useCurrentImageUsage from '../useCurrentImageUsage';
import useEventSource from '../useEventSource';
import useShowErrorMessage from '../useShowErrorMessage';
import useStreamLoading from '../useStreamLoading';
import { NewMessageResponse, SubmitHandlerType } from './type';

let messageId: string;

const useSubmit = () => {
  const { categoryIdData, itemIdData, addChatHandler, updateChatHandler, updateObject } = useAichatbotHistoryManager();
  const { showErrorMessage, showErrorMessageHandler } = useShowErrorMessage();
  const { streamLoading, streamLoadingHandler } = useStreamLoading();
  const { updateImageCountHandler, imagesCount } = useCurrentImageUsage();

  const [resetkey, setResetKey] = useState(Math.random());

  const { streamHandler, messages } = useEventSource({
    handelLoading: streamLoadingHandler,
    errorHandler: showErrorMessageHandler,
    imagesCount,
  });

  const successHandler = (v: NewMessageResponse) => {
    // updateQuery({
    //   payload: {
    //     ...historyAiChat,
    //     isActive: v.isActive,
    //     activeRating: v.activeRating,
    //     deactiveMessage: v.deactiveMessage,
    //     title: v.title,
    //     deactiveButton: v.deactiveButton,
    //     mediaLimitDate: v.mediaLimitDate,
    //     activaMedia:
    //       historyAiChat?.imageUsageLimit === historyAiChat?.currentImageUsage ? false : historyAiChat?.activaMedia,
    //   },

    // });

    updateObject(v);
    messageId = v.messageId;
    streamHandler({ id: v.messageId });
  };

  const { callApi, isLoading: loading } = useApi<NewMessageResponse>({
    method: 'POST',
    api: 'feature/ai/v2/sendstreammessage',
    onSuccess: (v: NewMessageResponse) => successHandler(v),
    onError: () => streamLoadingHandler(false),
  });

  const submitHandler: SubmitHandlerType = ({ prompt, imageId }) => {
    setResetKey(Math.random());
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
    updateChatHandler(messages, messageId);
  }, [messages]);

  useEffect(() => {
    if (loading) streamLoadingHandler(true);
  }, [loading]);

  const isLoading = streamLoading;

  return { submitHandler, isLoading, showErrorMessage, onErrorHandler, resetkey };
};

export default useSubmit;
