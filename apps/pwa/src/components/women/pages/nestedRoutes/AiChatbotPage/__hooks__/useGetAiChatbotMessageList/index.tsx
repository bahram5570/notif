import { useEffect, useState } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { RoleEnum } from '../useGetAiChatbotData/enum';
import { ChatItemType } from '../useGetAiChatbotData/type';

const useGetAiChatbotMessageList = () => {
  const [aiChatbotMessageList, setAiChatbotMessageList] = useState<ChatItemType[]>([]);
  const { getQuery } = useCustomReactQuery(['AiChatMessageList']);

  const aiChatMessageList = getQuery<{ data: ChatItemType[] }>({ queryKey: ['AiChatMessageList'] });

  const addChatHandler = (chat: ChatItemType) => {
    setAiChatbotMessageList([...aiChatbotMessageList, chat]);
  };

  const updateChatHandler = (messages: string, messageId: string) => {
    const updatedChats = [...aiChatbotMessageList];
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
        dislike: false,
        like: false,
        messageId,
      });
    }

    setAiChatbotMessageList(updatedChats);
  };

  useEffect(() => {
    if (aiChatMessageList) {
      setAiChatbotMessageList(aiChatMessageList.data);
    }
  }, [aiChatMessageList]);

  return { aiChatbotMessageList, updateChatHandler, addChatHandler };
};

export default useGetAiChatbotMessageList;
