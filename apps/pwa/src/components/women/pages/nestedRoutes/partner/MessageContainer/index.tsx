'use client';

import { useEffect } from 'react';

import Dark_Typography from '@components/ui/Dark_Typography';
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
          <Dark_Typography fontSize="Title_Small" className="text-center w-full text-impo_Neutral_OnBackground">
            ارسال پیام به همدل
          </Dark_Typography>

          {hasData && <MessageList messages={data} />}
          {hasData && !data[data.length - 1].readFlag && !data[data.length - 1].fromMan ? <Warning /> : <NewMessage />}
        </WomenPageLayout>
      )}
    </>
  );
};

export default MessageContainer;
