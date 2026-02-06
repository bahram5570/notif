import { useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SideEnum } from '../../MessageListContainer/Message/constants';
import { ResponseType, UseSubmitPropsType } from './type';

const useSubmit = ({ newMessageHandler, restHandler, chatToken }: UseSubmitPropsType) => {
  const [messageValue, setMessageValue] = useState('');

  const onSuccess = (v: ResponseType) => {
    if (v.valid) {
      restHandler();
      newMessageHandler({
        createTime: new Date().toISOString(),
        id: v.id,
        side: SideEnum.Self,
        text: messageValue,
        hasDelete: true,
      });

      setMessageValue('');
    }
  };

  const { callApi, isLoading } = usePwaApi<ResponseType>({
    api: 'pair/chat/message',
    method: 'POST',
    onSuccess: (v) => onSuccess(v),
  });

  const submitHandler = () => {
    const payload = {
      message: messageValue,
      token: chatToken,
    };

    callApi(payload);
  };

  const valueHandler = (message: string) => {
    setMessageValue(message);
  };

  return { submitHandler, submitLoading: isLoading, valueHandler, messageValue };
};

export default useSubmit;
