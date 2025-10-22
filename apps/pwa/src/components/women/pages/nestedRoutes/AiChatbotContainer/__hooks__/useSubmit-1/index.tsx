import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import useEventSource from '../useEventSource';
import { RoleEnum } from '../useGetHistoryChatData/enum';
import { HistoryChatResponsiveType } from '../useGetHistoryChatData/type';
import { SuccessResponseType, UseSubmitPropsType } from './type';

const useSubmit = ({ addChatHandler, updateChatHandler }: UseSubmitPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);
  const [streamLoading, setStreamLoading] = useState(false);
  const { streamHandler, messages } = useEventSource({ handelLoading: setStreamLoading });

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

  const isLoading = streamLoading;

  return { submitHandler, isLoading, data };
};

export default useSubmit;
