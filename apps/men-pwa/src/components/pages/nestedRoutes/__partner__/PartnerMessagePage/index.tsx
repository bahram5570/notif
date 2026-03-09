'use client';

import { useEffect } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { MessagerPartnerInput } from '@repo/core/components/partner/MessagerPartnerInput';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import MessageContainerSkeleton from './MessageContainerSkeleton';
import MessageList from './MessageList';
import Warning from './Warning';
import useGetData from './__hooks__/useGetData';
import useReadMessage from './__hooks__/useReadMessage';
import useSubmit from './__hooks__/useSubmit';

const PartnerMessagePage = () => {
  const { isLoading, submitHandler } = useSubmit();
  const { readMessageHandler } = useReadMessage();
  const { data, isLoading: loading } = useGetData();

  const hasData = data && data.length > 0;

  useEffect(() => {
    if (data) {
      const findNotReadMessage = data.find((message) => !message.fromMan && !message.readFlag);
      if (findNotReadMessage) {
        const messageIdList = [findNotReadMessage.messageId];
        readMessageHandler({ messageIds: messageIdList });
      }
    }
  }, [data]);

  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript="ارسال پیام"
      className="flex flex-col gap-5 px-4 min-h-[100dvh] "
      leftElement1="Profile"
    >
      {loading && <MessageContainerSkeleton />}
      {!loading && data && (
        <>
          <CustomTypography fontSize="Title_Small" className="text-center w-full text-impo_Neutral_OnBackground">
            ارسال پیام به همدل
          </CustomTypography>

          {hasData && <MessageList messages={data} />}

          {hasData && !data[data.length - 1].readFlag && data[data.length - 1].fromMan ? (
            <Warning />
          ) : (
            <MessagerPartnerInput
              isLoading={isLoading}
              placeholder="با ارسال یک پیام,همدلت رو خوشحال کن"
              submitHandler={submitHandler}
              isMan={true}
            />
          )}
        </>
      )}
    </MainPageLayout>
  );
};

export default PartnerMessagePage;
