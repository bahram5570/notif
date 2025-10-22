import { useState } from 'react';

import { baseUrl } from '@services/http';

import { getUserCookie } from '@actions/cookie.actions';
import { EventSource } from 'eventsource';

import { CLOSE_STREAM_TEXT } from './constants';
import { StreamHandlerPropsType } from './type';

const useEventSource = ({
  handelLoading,
  errorHandler,
}: {
  handelLoading: (v: boolean) => void;
  errorHandler: (v: boolean) => void;
}) => {
  const [messages, setMessages] = useState<string>('');

  const streamHandler = async ({ id }: StreamHandlerPropsType) => {
    const user = await getUserCookie();
    const Authorization = user ? `Bearer ${user.token}` : '';
    const url = `${baseUrl}/feature/ai/message/${id}`;

    setMessages('');
    handelLoading(true);

    const ev = new EventSource(url, {
      fetch: (input, init) =>
        fetch(input, {
          ...init,
          headers: {
            ...init.headers,
            Authorization,
          },
        }),
    });

    let timeoutId: NodeJS.Timeout;

    const timeoutPromise = new Promise<void>((_) => {
      timeoutId = setTimeout(() => {
        ev.close();
        handelLoading(false);
        errorHandler(true);
      }, 30000);
    });

    const messagePromise = new Promise<void>((resolve) => {
      ev.addEventListener('message', (event) => {
        handelLoading(false);
        let cleanedData = event.data.replace(/^data:\s*/i, '').replace(/^"|"$/g, '');

        if (cleanedData === CLOSE_STREAM_TEXT) {
          ev.close();
          clearTimeout(timeoutId);
          resolve();
          return;
        }

        setMessages((prev) => prev + cleanedData);

        clearTimeout(timeoutId);
        resolve();
      });

      ev.addEventListener('error', () => {
        ev.close();
        clearTimeout(timeoutId);
        handelLoading(false);
        errorHandler(true);
        resolve();
      });
    });

    await Promise.race([timeoutPromise, messagePromise]);
  };

  return { streamHandler, messages };
};

export default useEventSource;
