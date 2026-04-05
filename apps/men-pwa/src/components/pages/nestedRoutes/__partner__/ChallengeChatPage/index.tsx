'use client';

import { useEffect, useRef } from 'react';

import { ChallengeChatHeader } from '@repo/core/components/partner/ChallengeChatHeader';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import ChatContainerSkeleton from './ChatContainerSkeleton';
import Input from './Input';
import MessageListContainer from './MessageListContainer';
import useMessageData from './__hooks__/useMessageData';

const ChallengeChatPage = () => {
  const messageListRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, messageList, messageListHandler, progressData, submitHandler, submitLoading } =
    useMessageData();

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messageList]);

  return (
    <div className="w-full min-h-[100dvh] relative bg-impo_Neutral_Background">
      {isLoading && <ChatContainerSkeleton />}
      {!isLoading && data && (
        <>
          <ChallengeChatHeader
            {...data}
            progress={progressData}
            partnerAvatar={data.partnerAvatar || '/assets/images/man.webp'}
          />
          <div
            className=" flex relative z-0 flex-col overflow-y-auto  gap-5 pb-28 justify-center bg-[url('/assets/shared/images/bg-chat.webp')] bg-contain dark:bg-none"
            style={{ paddingTop: HEADER_HEIGHT + 90 }}
            ref={messageListRef}
          >
            <div className="px-[10px] py-3 bg-impo_Neutral_Surface">
              <CustomTypography fontSize="Lable_Large" className="w-full text-center text-impo_Neutral_OnBackground">
                {data.text}
              </CustomTypography>
            </div>

            <MessageListContainer items={messageList} partnerAvatar={data.partnerAvatar} />
            <Input submitHandler={submitHandler} onChange={messageListHandler} isLoading={submitLoading} />
          </div>
        </>
      )}
    </div>
  );
};

export default ChallengeChatPage;
