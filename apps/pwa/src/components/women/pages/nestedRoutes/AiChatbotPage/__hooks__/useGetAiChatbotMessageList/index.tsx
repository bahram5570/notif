import { useEffect, useState } from 'react';

import { PROMPT_TEXT } from '@constants/ai.constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useEventSource from '../useEventSource';
import { RoleEnum } from '../useGetAiChatbotData/enum';
import { AiChatbotDataResponseType, ChatItemType } from '../useGetAiChatbotData/type';
import { NewMessageResponse } from '../useSubmit/type';

let messageId: string;
const useGetAiChatbotMessageList = () => {
  const [aiChatbotMessageList, setAiChatbotMessageList] = useState<ChatItemType[]>([]);
  const { getQuery, updateQuery } = useCustomReactQuery(['AiChatMessageList']);

  const aiChatMessageList = getQuery<{ data: ChatItemType[] }>({ queryKey: ['AiChatMessageList'] });
  const [streamLoading, setStreamLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const { getQueryParams } = useQueryParamsHandler();
  const itemIdData = getQueryParams('itemId');
  const categoryIdData = getQueryParams('categoryId');

  const aiChatData = getQuery<AiChatbotDataResponseType>({ queryKey: ['historyAiChat'] });

  const { streamHandler, messages } = useEventSource({
    handelLoading: setStreamLoading,
    errorHandler: setShowErrorMessage,
  });

  const successHandler = (v: NewMessageResponse) => {
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

  const { callApi, isLoading: loading } = useApi<NewMessageResponse>({
    method: 'POST',
    api: 'feature/ai/v2/sendstreammessage',
    onSuccess: (v: NewMessageResponse) => successHandler(v),
    onError: () => setStreamLoading(false),
  });

  const submitHandler = (prompt: string) => {
    if (showErrorMessage) setShowErrorMessage(false);

    const payload = {
      promptCategoryId: '',
      promptItemId: '',
      prompt,
    };

    callApi(payload);
  };

  useEffect(() => {
    updateChatHandler(messages, messageId);
  }, [messages]);

  useEffect(() => {
    if (loading) setStreamLoading(true);
  }, [loading]);

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

  useEffect(() => {
    const queryData = aiChatMessageList?.data;
    const promptText = sessionStorage.getItem(PROMPT_TEXT);

    if (!queryData) return;

    if (promptText) {
      sessionStorage.removeItem(PROMPT_TEXT);
      submitHandler(promptText);
    }

    setAiChatbotMessageList((prev) => {
      let combined = [...queryData];

      if (promptText && !combined.some((c) => c.text === promptText && c.role === RoleEnum.User)) {
        combined.push({
          text: promptText,
          role: RoleEnum.User,
          dislike: false,
          like: false,
          messageId: '',
        });
        sessionStorage.removeItem(PROMPT_TEXT);
      }

      return combined;
    });
  }, [aiChatMessageList]);

  const isLoading = streamLoading;

  return { aiChatbotMessageList, updateChatHandler, addChatHandler, isLoading };
};

export default useGetAiChatbotMessageList;
