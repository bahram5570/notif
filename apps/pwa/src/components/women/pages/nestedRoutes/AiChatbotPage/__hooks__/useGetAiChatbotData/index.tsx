import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { RoleEnum } from './enum';
import { AiChatbotDataResponseType, ChatItemType } from './type';

const useGetAiChatbotData = () => {
  const [aiChatbotMessageList, setAiChatbotMessageList] = useState<ChatItemType[]>([]);
  const { getQuery, newQuery } = useCustomReactQuery(['historyAiChat']);
  const { getQueryParams } = useQueryParamsHandler();
  const itemIdData = getQueryParams('itemId');
  const categoryIdData = getQueryParams('categoryId');

  const api =
    categoryIdData && itemIdData
      ? `feature/ai/v2/chat/list?promptCategoryId=${categoryIdData}&promptItemId=${itemIdData}`
      : '';

  const { data, isLoading, callApi } = useApi<AiChatbotDataResponseType>({
    api,
    method: 'GET',
    queryKey: ['aiChatbot'],
    fetchOnMount: false,
  });

  const aiChatData = getQuery<AiChatbotDataResponseType>({ queryKey: ['historyAiChat'] });

  useEffect(() => {
    if (data) {
      setAiChatbotMessageList(data.chats);
      newQuery({ queryKey: ['historyAiChat'], payload: data });
    }
  }, [data]);

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
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { isLoading, addChatHandler, updateChatHandler, aiChatData, aiChatbotMessageList };
};

export default useGetAiChatbotData;
