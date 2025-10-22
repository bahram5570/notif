import { useState } from 'react';

import { baseUrl } from '@services/http';

import { getUserCookie } from '@actions/cookie.actions';
import { EventSource } from 'eventsource';

import { CLOSE_STREAM_TEXT } from './constants';
import { StreamHandlerPropsType } from './type';

const useEventSource = ({ handelLoading }: { handelLoading: (v: boolean) => void }) => {
  const [messages, setMessages] = useState<string>('');

  const streamHandler = async ({ id }: StreamHandlerPropsType) => {
    const user = await getUserCookie();
    const Authorization = user ? `Bearer ${user.token}` : '';
    const url = `${baseUrl}/feature/ai/message/${id}`;

    setMessages('');

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
      handelLoading(false);
      let cleanedData = event.data.replace(/^data:\s*/i, '').replace(/^"|"$/g, '');

      if (cleanedData === CLOSE_STREAM_TEXT) {
        ev.close();
        return;
      }

      if (cleanedData === '') {
        setMessages((prev) => prev + '\n');
      } else {
        setMessages((prev) => prev + cleanedData);
      }
    });

    ev.addEventListener('error', () => {
      ev.close();
      handelLoading(false);
    });

    // setTimeout(() => {
    //   ev.close();
    //   setStreamLoading(false);

    // }, 30000);
  };

  return { streamHandler, messages };
};

export default useEventSource;
