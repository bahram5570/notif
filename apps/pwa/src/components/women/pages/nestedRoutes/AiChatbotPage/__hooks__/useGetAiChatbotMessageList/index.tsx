import { useEffect, useState } from 'react';

import { PROMPT_TEXT } from '@constants/ai.constants';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { RoleEnum } from '../useGetAiChatbotData/enum';
import { ChatItemType } from '../useGetAiChatbotData/type';
import { AddChatHandlerType, UpdateChatHandlerType } from './type';

const useGetAiChatbotMessageList = () => {
  const [aiChatbotMessageList, setAiChatbotMessageList] = useState<ChatItemType[]>([]);
  const { getQuery, updateQuery } = useCustomReactQuery(['AiChatMessageList']);

  const aiChatMessageList = getQuery<{ data: ChatItemType[] }>({ queryKey: ['AiChatMessageList'] });

  const addChatHandler: AddChatHandlerType = ({ chat, imageId }) => {
    const newUserChat: ChatItemType = {
      dislike: false,
      like: false,
      messageId: '',
      role: RoleEnum.User,
      text: chat,
      isAnswered: false,
      media: imageId ?? [],
    };

    const queryData = aiChatMessageList?.data;

    if (!queryData) return;
    let combined = [...queryData];
    const payload = combined.push(newUserChat);

    updateQuery({ queryKey: ['AiChatMessageList'], payload: { data: combined } });
    sessionStorage.removeItem(PROMPT_TEXT);
  };

  const updateChatHandler: UpdateChatHandlerType = (messages, messageId) => {
    const queryData = aiChatMessageList?.data;

    if (!queryData) return;
    const updatedChats = [...queryData];

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
        media: [''],
      });
    }
    updateQuery({ queryKey: ['AiChatMessageList'], payload: { data: updatedChats } });
  };

  useEffect(() => {
    if (aiChatMessageList) {
      setAiChatbotMessageList(aiChatMessageList.data);
    }
  }, [aiChatMessageList]);

  return { aiChatbotMessageList, updateChatHandler, addChatHandler };
};

export default useGetAiChatbotMessageList;
