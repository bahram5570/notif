import { useRef, useState } from 'react';

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
  const evRef = useRef<EventSource | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeRequestId = useRef<string | null>(null);

  /** پاکسازی کامل استریم قبلی */
  const cleanup = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (evRef.current) {
      try {
        evRef.current.close();
      } catch (_) {}
      evRef.current = null;
    }

    handelLoading(false);
  };

  const streamHandler = async ({ id }: StreamHandlerPropsType) => {
    // در هر درخواست جدید، استریم قبلی رو می‌بندیم
    cleanup();
    errorHandler(false);
    setMessages('');
    handelLoading(true);

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
    activeRequestId.current = id;

    /** تایم‌اوت فقط اگر هیچ پیام یا پاسخ نرسید */
    timeoutRef.current = setTimeout(() => {
      // اگر هنوز درخواست فعلی فعال بود
      if (activeRequestId.current === id) {
        cleanup();
        errorHandler(true);
      }
    }, 30000);

    ev.addEventListener('message', (event) => {
      // اگر این پیام مربوط به استریم فعلی نیست، نادیده بگیر
      if (activeRequestId.current !== id) return;

      handelLoading(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      let cleanedData = event.data.replace(/^data:\s*/i, '').replace(/^"|"$/g, '');

      if (cleanedData === CLOSE_STREAM_TEXT) {
        cleanup();
        activeRequestId.current = null;
        return;
      }

      setMessages((prev) => prev + cleanedData);
    });

    ev.addEventListener('error', () => {
      if (activeRequestId.current === id) {
        cleanup();
        errorHandler(true);
        activeRequestId.current = null;
      }
    });
  };

  return { streamHandler, messages };
};

export default useEventSource;
