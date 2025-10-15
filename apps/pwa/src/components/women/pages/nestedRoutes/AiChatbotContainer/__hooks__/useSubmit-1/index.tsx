import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import useEventSource from '../useEventSource';
import { RoleEnum } from '../useGetHistoryChatData/enum';
import { ChatType, HistoryChatResponsiveType } from '../useGetHistoryChatData/type';
import { SuccessResponseType, UseSubmitPropsType } from './type';

const useSubmit = ({ addChatHandler, setAiChatbotList }: UseSubmitPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);
  const { streamHandler, streamLoading, messages } = useEventSource();

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
    setAiChatbotList((prevChats: ChatType[]) => {
      const updatedChats = [...prevChats];
      const lastChat = updatedChats[updatedChats.length - 1];

      if (lastChat && lastChat.role === RoleEnum.Assistant) {
        updatedChats[updatedChats.length - 1] = {
          ...lastChat,
          text: messages,
        };
      } else {
        updatedChats.push({
          role: RoleEnum.Assistant,
          text: messages,
          isAnswered: true,
        });
      }

      return updatedChats;
    });
  }, [messages]);

  const isLoading = loading || streamLoading;

  return { submitHandler, isLoading, data };
};

export default useSubmit;
