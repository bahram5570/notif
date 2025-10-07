'use client';

import { useEffect } from 'react';

import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';

import MessageContainerSkeleton from './MessageContainerSkeleton';
import MessageList from './MessageList';
import NewMessage from './NewMessage';
import Warning from './Warning';
import useGetData from './__hooks__/useGetData';
import useReadMessage from './__hooks__/useReadMessage';

const MessageContainer = () => {
  const { data, isLoading } = useGetData();
  const { submitHandler } = useReadMessage();

  const hasData = data && data.length > 0;

  useEffect(() => {
    if (data) {
      const findNotReadMessage = data.find((message) => message.fromMan && !message.readFlag);
      if (findNotReadMessage) {
        const messageIdList = [findNotReadMessage.messageId];
        submitHandler({ messageIds: messageIdList });
      }
    }
  }, [data]);

  return (
    <>
      {isLoading && <MessageContainerSkeleton />}
      {!isLoading && (
        <WomenPageLayout
          rightElement="BackButton"
          rightElementScript="ارسال پیام"
          className="flex flex-col gap-5 px-4 min-h-[100dvh] "
        >
          <Typography scale="Title" size="Small" textAlign="center" className="w-full">
            ارسال پیام به همدل
          </Typography>
          {hasData && <MessageList messages={data} />}
          {hasData && !data[data.length - 1].readFlag && !data[data.length - 1].fromMan ? <Warning /> : <NewMessage />}
        </WomenPageLayout>
      )}
    </>
  );
};

export default MessageContainer;
