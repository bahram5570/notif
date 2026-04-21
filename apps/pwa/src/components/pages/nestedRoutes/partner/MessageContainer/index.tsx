'use client';

import { useEffect } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

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
        <MainPageLayout
          rightElement="BackButton"
          rightElementScript="ارسال پیام"
          className="flex flex-col gap-5 px-4 min-h-[100dvh] "
          paddingTop={HEADER_HEIGHT + 16}
        >
          <CustomTypography fontSize="Title_Small" className="text-center w-full text-impo_Neutral_OnBackground">
            ارسال پیام به همدل
          </CustomTypography>

          {hasData && <MessageList messages={data} />}
          {hasData && !data[data.length - 1].readFlag && !data[data.length - 1].fromMan ? <Warning /> : <NewMessage />}
        </MainPageLayout>
      )}
    </>
  );
};

export default MessageContainer;
