'use client';

import { createContext, useEffect, useState } from 'react';

import { removeSessionStoragePromptText } from '@utils/aiChatbot';

import useGetData from './__hook__/useGetData';
import { RoleEnum } from './__hook__/useGetData/enum';
import { AiChatbotDataResponseType, ChatItemType } from './__hook__/useGetData/type';
import { AddChatHandlerType, AiChatHistoryManagerContextType, UpdateChatHandlerType } from './type';

export const AiChatHistoryManagerContext = createContext<AiChatHistoryManagerContextType>({
  categoryIdData: null,
  chatData: undefined,
  isLoading: false,
  itemIdData: null,
  addChatHandler: () => {},
  updateChatHandler: () => {},
  updateObject: () => {},
});

const AiChatHistoryManagerProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatData, setChatData] = useState<AiChatbotDataResponseType | undefined>();
  const { isLoading, categoryIdData, itemIdData, data } = useGetData();

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

    if (!chatData) return;

    setChatData((prev) => {
      if (!prev) return undefined;

      return {
        ...prev,
        currentImageUsage: chatData.currentImageUsage + (imageId?.length || 0),
        chats: [...prev.chats, newUserChat],
      };
    });
    removeSessionStoragePromptText();
  };

  const updateChatHandler: UpdateChatHandlerType = (messages, messageId) => {
    if (!chatData) return;

    const newChatData = { ...chatData };
    const chats = [...newChatData.chats];

    const lastChat = chats[chats?.length - 1];

    if (lastChat?.role === RoleEnum.Assistant) {
      chats[chats.length - 1] = {
        ...lastChat,
        text: messages,
      };
    } else {
      chats.push({
        role: RoleEnum.Assistant,
        text: messages,
        isAnswered: true,
        dislike: false,
        like: false,
        messageId,
        media: [],
      });
    }

    newChatData.chats = chats;

    setChatData(newChatData);
  };

  const updateObject = (updates: AiChatbotDataResponseType) => {
    setChatData((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  useEffect(() => {
    if (data) {
      setChatData(data);
    }
  }, [data]);

  return (
    <AiChatHistoryManagerContext.Provider
      value={{ categoryIdData, chatData, isLoading, itemIdData, addChatHandler, updateChatHandler, updateObject }}
    >
      {children}
    </AiChatHistoryManagerContext.Provider>
  );
};

export default AiChatHistoryManagerProvider;
