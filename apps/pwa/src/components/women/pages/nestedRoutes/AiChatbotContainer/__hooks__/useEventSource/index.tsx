import { useState } from 'react';

import { baseUrl } from '@services/http';

import { getUserCookie } from '@actions/cookie.actions';
import { EventSource } from 'eventsource';

import { CLOSE_STREAM_TEXT } from './constants';
import { StreamHandlerPropsType } from './type';

const useEventSource = () => {
  const [streamLoading, setStreamLoading] = useState(false);
  const [messages, setMessages] = useState<string>('');

  const streamHandler = async ({ id }: StreamHandlerPropsType) => {
    const user = await getUserCookie();
    const Authorization = user ? `Bearer ${user.token}` : '';
    const url = `${baseUrl}/feature/ai/message/${id}`;
    setStreamLoading(true);
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
      setStreamLoading(false);
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
      setStreamLoading(false);
    });

    // setTimeout(() => {
    //   ev.close();
    //   setStreamLoading(false);

    // }, 30000);
  };

  return { streamHandler, streamLoading, messages };
};

export default useEventSource;
