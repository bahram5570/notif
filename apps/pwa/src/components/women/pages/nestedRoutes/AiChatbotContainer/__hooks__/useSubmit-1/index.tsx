import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import useEventSource from '../useEventSource';
import { RoleEnum } from '../useGetHistoryChatData/enum';
import { HistoryChatResponsiveType } from '../useGetHistoryChatData/type';
import { SuccessResponseType, UseSubmitPropsType } from './type';

const useSubmit = ({ addChatHandler, updateChatHandler }: UseSubmitPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);
  const { streamHandler, streamLoading, messages } = useEventSource();
  const [isUiLoading, setIsUiLoading] = useState(false);

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
  });

  const submitHandler = (text: string) => {
    addChatHandler({ role: RoleEnum.User, text });
    const payload = {
      prompt: text,
    };

    callApi(payload);
  };

  useEffect(() => {
    if (loading) setIsUiLoading(true);
  }, [loading]);

  useEffect(() => {
    if (!loading && streamLoading) setIsUiLoading(true);
    else if (!loading && !streamLoading) {
      const t = setTimeout(() => setIsUiLoading(false), 300);
      return () => clearTimeout(t);
    }
  }, [loading, streamLoading]);

  useEffect(() => {
    updateChatHandler(messages);
  }, [messages]);

  const isLoading = isUiLoading;

  return { submitHandler, isLoading, data };
};

export default useSubmit;
