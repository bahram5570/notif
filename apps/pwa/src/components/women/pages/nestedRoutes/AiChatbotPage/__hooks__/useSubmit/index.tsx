import { useEffect, useState } from 'react';

import { PROMPT_TEXT } from '@constants/ai.constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useEventSource from '../useEventSource';
import { ChatItemType } from '../useGetAiChatbotData/type';
import { NewMessageResponse, SubmitHandlerType, UseSubmitPropsType } from './type';

let messageId: string;
const useSubmit = ({ addChatHandler, updateChatHandler }: UseSubmitPropsType) => {
  const [streamLoading, setStreamLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [resetkey, setResetKey] = useState(Math.random());
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);
  const { getQueryParams } = useQueryParamsHandler();

  const itemIdData = getQueryParams('promptItemId');
  const categoryIdData = getQueryParams('promptCategoryId');

  const aiChatMessageList = getQuery<{ data: ChatItemType[] }>({ queryKey: ['AiChatMessageList'] });

  const { streamHandler, messages } = useEventSource({
    handelLoading: setStreamLoading,
    errorHandler: setShowErrorMessage,
  });

  const successHandler = (v: NewMessageResponse) => {
    updateQuery({
      queryKey: ['historyAiChat'],
      payload: {
        chats: aiChatMessageList?.data,
        isActive: v.isActive,
        activeRating: v.activeRating,
        deactiveMessage: v.deactiveMessage,
        title: v.title,
        deactiveButton: v.deactiveButton,
      },
    });
    messageId = v.messageId;
    streamHandler({ id: v.messageId });
  };

  const { callApi, isLoading: loading } = useApi<NewMessageResponse>({
    method: 'POST',
    api: 'feature/ai/v2/sendstreammessage',
    onSuccess: (v: NewMessageResponse) => successHandler(v),
    onError: () => setStreamLoading(false),
  });

  const submitHandler: SubmitHandlerType = ({ prompt, imageId }) => {
    setResetKey(Math.random());
    if (showErrorMessage) setShowErrorMessage(false);
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
    setShowErrorMessage(false);
    streamHandler({ id: messageId });
    setStreamLoading(true);
  };

  useEffect(() => {
    if (!aiChatMessageList) return;

    const promptText = sessionStorage.getItem(PROMPT_TEXT);

    if (promptText) {
      submitHandler({ prompt: promptText, imageId: [''] });
    }
  }, [aiChatMessageList]);

  useEffect(() => {
    updateChatHandler(messages, messageId);
  }, [messages]);

  useEffect(() => {
    if (loading) setStreamLoading(true);
  }, [loading]);

  const isLoading = streamLoading;

  return { submitHandler, isLoading, showErrorMessage, onErrorHandler, resetkey };
};

export default useSubmit;
