import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { RoleEnum } from './enum';
import { ChatType, HistoryChatResponsiveType } from './type';

const useGetHistoryChatData = () => {
  const [aiChatbotList, setAiChatbotList] = useState<ChatType[]>([]);
  const { getQuery, newQuery } = useCustomReactQuery(['historyAiChat']);

  const { data, isLoading: historyLoading } = useApi<HistoryChatResponsiveType>({
    api: 'feature/ai/chat/list',
    queryKey: ['historyChatList'],
    method: 'GET',
  });
  const aiChatData = getQuery<HistoryChatResponsiveType>({ queryKey: ['historyAiChat'] });

  useEffect(() => {
    if (data) {
      setAiChatbotList(data.chats);
      newQuery({ queryKey: ['historyAiChat'], payload: data });
    }
  }, [data]);

  const addChatHandler = (chat: ChatType) => {
    setAiChatbotList([...aiChatbotList, chat]);
  };

  const updateChatHandler = (messages: string) => {
    const updatedChats = [...aiChatbotList];
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

    setAiChatbotList(updatedChats);
  };

  return { historyLoading, aiChatData, addChatHandler, aiChatbotList, updateChatHandler };
};

export default useGetHistoryChatData;
