import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import useEventSource from '../useEventSource';
import { RoleEnum } from '../useGetHistoryChatData/enum';
import { HistoryChatResponsiveType } from '../useGetHistoryChatData/type';
import { SuccessResponseType, UseSubmitPropsType } from './type';

let messageId: string;

const useSubmit = ({ addChatHandler, updateChatHandler }: UseSubmitPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);
  const [streamLoading, setStreamLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { streamHandler, messages } = useEventSource({
    handelLoading: setStreamLoading,
    errorHandler: setShowErrorMessage,
  });

  const aiChatData = getQuery<HistoryChatResponsiveType>({ queryKey: ['historyAiChat'] });

  const successHandler = (v: SuccessResponseType) => {
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

  const {
    data,
    isLoading: loading,
    callApi,
  } = useApi<SuccessResponseType>({
    api: 'feature/ai/sendstreammessage',
    method: 'POST',
    onSuccess: (v: SuccessResponseType) => successHandler(v),
    onError: () => setStreamLoading(false),
  });

  const submitHandler = (text: string) => {
    if (showErrorMessage) setShowErrorMessage(false);
    addChatHandler({ role: RoleEnum.User, text });
    const payload = {
      prompt: text,
    };

    callApi(payload);
  };

  useEffect(() => {
    if (loading) setStreamLoading(true);
  }, [loading]);

  useEffect(() => {
    updateChatHandler(messages);
  }, [messages]);

  const onError = () => {
    setShowErrorMessage(false);
    streamHandler({ id: messageId });
    setStreamLoading(true);
  };

  const isLoading = streamLoading;

  return { submitHandler, isLoading, data, showErrorMessage, onError };
};

export default useSubmit;
