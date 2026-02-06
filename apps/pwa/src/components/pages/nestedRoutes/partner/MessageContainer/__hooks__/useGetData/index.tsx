import { useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { MessageResponseType, MessageType } from './type';

const useGetData = () => {
  const [data, setData] = useState<MessageType[]>();

  const successHandler = (v: MessageResponseType) => {
    const lastTwo = v.messages.slice(-2);
    setData(lastTwo);
  };
  const { isLoading } = usePwaApi<MessageResponseType>({
    method: 'GET',
    queryKey: ['messagePartner'],
    api: 'message',
    onSuccess: (v) => successHandler(v),
  });

  return { isLoading, data };
};

export default useGetData;
