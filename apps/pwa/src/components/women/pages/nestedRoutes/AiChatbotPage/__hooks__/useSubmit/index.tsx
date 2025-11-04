import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useEventSource from '../useEventSource';
import { RoleEnum } from '../useGetAiChatbotData/enum';
import { AiChatbotDataResponseType } from '../useGetAiChatbotData/type';
import { NewMessageResponse, UseSubmitPropsType } from './type';

let messageId: string;
const useSubmit = ({ addChatHandler, updateChatHandler }: UseSubmitPropsType) => {
  const [streamLoading, setStreamLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);
  const { getQueryParams } = useQueryParamsHandler();
  const itemIdData = getQueryParams('itemId');
  const categoryIdData = getQueryParams('categoryId');

  const aiChatData = getQuery<AiChatbotDataResponseType>({ queryKey: ['historyAiChat'] });

  const { streamHandler, messages } = useEventSource({
    handelLoading: setStreamLoading,
    errorHandler: setShowErrorMessage,
  });

  const successHandler = (v: NewMessageResponse) => {
    updateQuery({
      queryKey: ['historyAiChat'],
      payload: {
        ...aiChatData,
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

  const submitHandler = (prompt: string) => {
    if (showErrorMessage) setShowErrorMessage(false);
    addChatHandler({ role: RoleEnum.User, text: prompt });
    const payload = {
      promptCategoryId: categoryIdData || '',
      promptItemId: itemIdData || '',
      prompt,
    };

    callApi(payload);
  };

  useEffect(() => {
    updateChatHandler(messages, messageId);
  }, [messages]);

  useEffect(() => {
    if (loading) setStreamLoading(true);
  }, [loading]);

  const isLoading = streamLoading;

  return { submitHandler, isLoading, showErrorMessage };
};

export default useSubmit;
