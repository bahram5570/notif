import { useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useParams } from 'next/navigation';

import useUpdateChatReactQuery from '../useUpdateChatReactQuery';

const useTextValue = () => {
  const [text, setText] = useState('');
  const ticketId = useParams()?.ticketId;
  const { upgateHandler } = useUpdateChatReactQuery();

  const textHandler = (v: string) => {
    setText(v);
  };

  const successHandler = () => {
    upgateHandler({ text, fileName: '' });
    setText('');
  };

  const { callApi, isLoading: textLoading } = usePwaApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `support/ticket/${ticketId}`,
  });

  const submitTextHandler = () => {
    const value = text.trim();

    if (value && !textLoading) {
      callApi({ text, fileName: '' });
    }
  };

  return { text, textHandler, submitTextHandler, textLoading };
};

export default useTextValue;
