import { useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useParams, useRouter } from 'next/navigation';

import { initailProgressValue } from './constants';
import { ChatResponseType, MessageItemType, ProgressType, SubmitResponseType } from './type';

const useMessageData = () => {
  const [messageList, setMessageList] = useState<MessageItemType[]>([]);
  const [progressData, setProgressData] = useState<ProgressType>(initailProgressValue);

  const router = useRouter();
  const chatId = useParams()?.chatId;

  const successHandler = (v: ChatResponseType) => {
    setMessageList(v.items);
    setProgressData(v.progress);
  };

  const newMessageSuccessHandler = (v: SubmitResponseType) => {
    setProgressData(v.progress);
  };

  const errorHandler = () => {
    router.replace('/not-found');
  };

  const messageListHandler = (item: MessageItemType) => {
    const messages = [...messageList];
    messages.push(item);
    setMessageList(messages);
  };

  const { data, isLoading } = usePwaApi<ChatResponseType>({
    api: `challenge/${chatId}/chat`,
    method: 'GET',
    queryKey: [`chat-${chatId}`],
    onError: errorHandler,
    onSuccess: successHandler,
  });

  const { callApi, isLoading: submitLoading } = usePwaApi<SubmitResponseType>({
    api: `challenge/${chatId}/chat`,
    method: 'POST',
    onSuccess: newMessageSuccessHandler,
  });

  const submitHandler = (text: string) => {
    const payload = { text };
    callApi(payload);
  };

  return { data, isLoading, progressData, messageList, messageListHandler, submitHandler, submitLoading };
};

export default useMessageData;
