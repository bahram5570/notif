'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import styles from './styles.module.css';

import MessageListContainer from './MessageListContainer';
import PartnerMessageInput from './PartnerMessageInput';
import WarningMessage from './WarningMessage';
import useGetChatToken from './__hooks__/useGetChatToken';
import useGetMessageData from './__hooks__/useGetMessageData';
import useGetNewMessageData from './__hooks__/useGetNewMessageData';
import useSubmit from './__hooks__/useSubmit';

const NewPartnerMessagePage = () => {
  const { chatToken, timeInterval, isLoading } = useGetChatToken();
  const { messageList, newMessageHandler, loading, messageListRef, messageHandler, pointer } = useGetMessageData({
    chatToken,
  });

  const { restHandler } = useGetNewMessageData({
    lastMessageId: pointer,
    messageHandler,
    chatToken,
    timeInterval,
  });

  const { submitHandler, submitLoading, valueHandler, messageValue } = useSubmit({
    newMessageHandler,
    restHandler,
    chatToken,
  });

  const showLoading = isLoading || loading;
  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="گفتگو با همدل">
      <div
        className={`overflow-y-auto pb-20 h-[100dvh]   bg-[url('/assets/shared/images/bg-chat.webp')] bg-contain  dark:bg-none ${styles.container} ${loading && 'pointer-events-none'}`}
        ref={messageListRef}
      >
        {showLoading && (
          <div className="flex justify-center items-center absolute w-full">
            <CustomSpinner size={30} />
          </div>
        )}
        <WarningMessage messageList={messageList} />

        <MessageListContainer messageList={messageList} />

        <PartnerMessageInput
          submitHandler={submitHandler}
          messageValue={messageValue}
          valueHandler={valueHandler}
          submitLoading={submitLoading}
        />
      </div>
    </MainPageLayout>
  );
};

export default NewPartnerMessagePage;
