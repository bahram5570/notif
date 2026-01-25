import { useState } from 'react';

import useApi from '@hooks/useApi';

import { ResponseChatToken } from './type';

const useGetChatToken = () => {
  const [chatToken, setChatToken] = useState('');
  const [timeInterval, setTimeInterval] = useState(0);

  const onSuccess = (v: ResponseChatToken) => {
    setChatToken(v.token);
    setTimeInterval(v.timeIntervalNumber);
  };

  const { isLoading } = useApi<ResponseChatToken>({
    api: 'pair/chat/gettoken',
    method: 'GET',
    queryKey: ['chatToker'],
    onSuccess: (v) => onSuccess(v),
  });

  return { chatToken, isLoading, timeInterval };
};

export default useGetChatToken;
