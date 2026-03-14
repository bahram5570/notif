import { useEffect, useRef, useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ItemPropsType, ResponseMessageDataType } from '../../MessageListContainer/Message/type';
import { UseGetMessageDataPropsType } from './type';

const useGetMessageData = ({ chatToken }: UseGetMessageDataPropsType) => {
  const messageListRef = useRef<HTMLDivElement>(null);
  const [messageList, setMessageList] = useState<ItemPropsType[]>([]);

  const [pointer, setPointer] = useState('');

  const isFirstFetch = useRef(false);
  const isFirstLoad = useRef(false);
  const skip = useRef(0);

  const updateMessageList = (messages: ItemPropsType[], appendToEnd: boolean) => {
    let newMessageList = [...messageList];

    if (appendToEnd) {
      newMessageList.push(...messages);
    } else {
      if (!pointer) {
        setPointer(messages[messages.length - 1].id);
      }
      messages.forEach((m) => {
        const list = newMessageList.slice(0, 30);
        const sameId = list.find((message) => message.id === m.id);
        if (sameId) {
          return;
        }

        newMessageList.unshift(m);
      });
      // newMessageList.unshift(...messages);
    }

    skip.current = newMessageList.length - 1;

    setMessageList(newMessageList);
  };

  const onSuccess = (v: ResponseMessageDataType) => {
    if (!isFirstFetch.current) {
      const lastMessageId = v.items[0]?.id;

      setPointer(lastMessageId);
      isFirstFetch.current = true;
    }

    updateMessageList(v.items, true);
  };

  const {
    callApi,
    isLoading: messageLoading,
    data,
  } = usePwaApi<ResponseMessageDataType>({
    api: 'pair/chat/list',
    method: 'POST',
    onSuccess: (v) => onSuccess(v),
  });

  const getMessageList = () => {
    const payload = {
      token: chatToken,
      skip: skip.current,
      pageSize: 10,
      pageNo: 0,
    };
    callApi(payload);
  };

  const newMessageHandler = (message: ItemPropsType) => {
    updateMessageList([message], false);
  };

  const messageHandler = (message: ItemPropsType[]) => {
    const lastItem = message[message.length - 1].id;

    setPointer(lastItem);

    updateMessageList(message, false);
  };

  useEffect(() => {
    if (chatToken && !isFirstLoad.current) {
      getMessageList();

      isFirstLoad.current = true;
    }
  }, [chatToken]);

  useEffect(() => {
    if (!chatToken) {
      return;
    }
    const totalCount = data?.totalCount || 10;
    const el = messageListRef.current;
    if (!el) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      if (!target) return;

      const isTop = target.scrollTop === 0;

      if (isTop && !messageLoading) {
        const isAllItemsLoaded = skip.current >= totalCount;
        if (!isAllItemsLoaded) {
          getMessageList();
        }
      }
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [messageLoading, chatToken]);

  useEffect(() => {
    setTimeout(() => {
      if (messageListRef.current) {
        messageListRef.current.scrollTo({ top: 20000 });
      }
    }, 300);
  }, []);

  const loading = messageLoading;

  return { messageList, loading, newMessageHandler, messageHandler, messageListRef, pointer };
};

export default useGetMessageData;
