import { useState } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { RoleEnum } from '../useGetAiChatbotData/enum';
import { ChatItemType } from '../useGetAiChatbotData/type';

const useAiChatbotMessageList = () => {
  const [aiChatbotList, setAiChatbotList] = useState<ChatItemType[]>([]);
  const { getQuery, newQuery } = useCustomReactQuery(['historyAiChat']);

  const addChatHandler = (chat: ChatItemType) => {
    setAiChatbotList([...aiChatbotList, chat]);
  };

  const updateChatHandler = (messages: string, messageId: string) => {
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
        dislike: false,
        like: false,
        messageId,
      });
    }

    setAiChatbotList(updatedChats);
  };

  useEffect(() => {
    if (data) {
      newQuery({ queryKey: ['historyAiChat'], payload: data });
    }
  }, [data]);
};

export default useAiChatbotMessageList;
