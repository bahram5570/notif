import { useEffect, useState } from 'react';

import { getSessionStoragePromptText } from '@utils/aiChatbot';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import useCurrentImageUsage from '../useCurrentImageUsage';
import useEventSource from '../useEventSource';
import { AiChatbotDataResponseType, ChatItemType } from '../useGetAiChatbotData/type';
import useShowErrorMessage from '../useShowErrorMessage';
import useStreamLoading from '../useStreamLoading';
import { NewMessageResponse, SubmitHandlerType, UseSubmitPropsType } from './type';

let messageId: string;

const useSubmit = ({ addChatHandler, updateChatHandler, categoryIdData, itemIdData }: UseSubmitPropsType) => {
  const { showErrorMessage, showErrorMessageHandler } = useShowErrorMessage();
  const { streamLoading, streamLoadingHandler } = useStreamLoading();
  const { updateImageCountHandler, imagesCount } = useCurrentImageUsage();

  const [resetkey, setResetKey] = useState(Math.random());
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);

  const aiChatMessageList = getQuery<{ data: ChatItemType[] }>({ queryKey: ['AiChatMessageList'] });
  const historyAiChat = getQuery<AiChatbotDataResponseType>({ queryKey: ['historyAiChat'] });

  const { streamHandler, messages } = useEventSource({
    handelLoading: streamLoadingHandler,
    errorHandler: showErrorMessageHandler,
    imagesCount,
  });

  const successHandler = (v: NewMessageResponse) => {
    updateQuery({
      queryKey: ['historyAiChat'],
      payload: {
        ...historyAiChat,
        isActive: v.isActive,
        activeRating: v.activeRating,
        deactiveMessage: v.deactiveMessage,
        title: v.title,
        deactiveButton: v.deactiveButton,
        activaMedia:
          historyAiChat?.imageUsageLimit === historyAiChat?.currentImageUsage ? false : historyAiChat?.activaMedia,
      },
    });

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
    updateImageCountHandler(imageId?.length || 0);
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
    if (!aiChatMessageList) return;

    const promptText = getSessionStoragePromptText();

    if (promptText) {
      submitHandler({ prompt: promptText, imageId: [] });
    }
  }, [aiChatMessageList]);

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
