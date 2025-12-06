import { useEffect, useRef, useState } from 'react';

import { baseUrl } from '@services/http';

import { getUserCookie } from '@actions/cookie.actions';
import { EventSource } from 'eventsource';

import useCurrentImageUsage from '../useCurrentImageUsage';
import { CLOSE_STREAM_TEXT } from './constants';
import { StreamHandlerPropsType } from './type';

const useEventSource = ({
  handelLoading,
  errorHandler,
  imagesCount,
}: {
  handelLoading?: (v: boolean) => void;
  errorHandler?: (v: boolean) => void;
  imagesCount: number;
}) => {
  const [messages, setMessages] = useState<string>('');
  const evRef = useRef<EventSource | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const firstMessageReceived = useRef(false);
  const { updateImageCountHandler } = useCurrentImageUsage();

  const cleanup = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (evRef.current) {
      try {
        evRef.current.close();
      } catch (e) {
        // ignore close error
      }
      evRef.current = null;
    }

    if (handelLoading) handelLoading(false);
  };

  const successHandler = (text: any) => {
    const cleanedData = String(text)
      .replace(/^data:\s*/i, '')
      .replace(/^"|"$/g, '');

    if (cleanedData === CLOSE_STREAM_TEXT) {
      cleanup();
      return;
    }

    if (cleanedData === '') {
      setMessages((prev) => prev + '\n');
    } else {
      setMessages((prev) => prev + cleanedData);
    }
  };

  useEffect(() => {
    return () => cleanup();
  }, []);

  const streamHandler = async ({ id }: StreamHandlerPropsType) => {
    cleanup();
    setMessages('');
    firstMessageReceived.current = false;
    if (handelLoading) handelLoading(true);
    if (errorHandler) errorHandler(false);

    const user = await getUserCookie();
    const Authorization = user ? `Bearer ${user.token}` : '';
    const url = `${baseUrl}/feature/ai/message/${id}`;

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

    evRef.current = ev;

    timeoutRef.current = setTimeout(() => {
      if (!firstMessageReceived.current) {
        if (errorHandler) errorHandler(true);
        updateImageCountHandler(-imagesCount);
        cleanup();
      }
    }, 30000);

    ev.addEventListener('message', (event) => {
      if (handelLoading) handelLoading(false);
      if (!firstMessageReceived.current) {
        firstMessageReceived.current = true;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
      successHandler(event.data);
    });

    ev.addEventListener('error', () => {
      cleanup();
    });
  };

  return { streamHandler, messages };
};

export default useEventSource;
