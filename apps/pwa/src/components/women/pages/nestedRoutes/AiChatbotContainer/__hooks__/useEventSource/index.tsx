import { useState } from 'react';

import { baseUrl } from '@services/http';

import { getUserCookie } from '@actions/cookie.actions';
import { EventSource } from 'eventsource';

import { RoleEnum } from '../useGetHistoryChatData/enum';
import { CLOSE_STREAM_TEXT } from './constants';
import { StreamHandlerPropsType, UseEventSourcePropsType } from './type';

const useEventSource = ({ addChatHandler }: UseEventSourcePropsType) => {
  const [streamLoading, setStreamLoading] = useState(false);
  const [data, setData] = useState<string>('');

  const streamHandler = async ({ id }: StreamHandlerPropsType) => {
    const user = await getUserCookie();
    const Authorization = user ? `Bearer ${user.token}` : '';
    const url = `${baseUrl}/feature/ai/message/${id}`;
    setStreamLoading(true);

    const ev = new EventSource(url, {
      fetch: (input, init) =>
        fetch(input, {
          ...init,
          headers: {
            ...init.headers,
            Authorization: Authorization,
          },
        }),
    });

    ev.addEventListener('message', (event) => {
      const data: string = event.data.replace(/"/g, '').trim();

      if (data === CLOSE_STREAM_TEXT) {
        ev.close();
        setStreamLoading(false);
        return;
      }

      setData(data);

      addChatHandler({ role: RoleEnum.Assistant, text: data, isAnswered: true });
    });

    // setTimeout(() => {
    //   ev.close();
    //   setStreamLoading(false);
    //   addChatHandler({ role: RoleEnum.Assistant, text: messages });
    // }, 30000);

    console.log(data, 'mess');
  };

  return { streamHandler, streamLoading };
};

export default useEventSource;
