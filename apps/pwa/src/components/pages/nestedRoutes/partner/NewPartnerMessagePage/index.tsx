'use client';

import styles from './styles.module.css';

import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import Dark_Spinner from '@components/ui/Dark_Spinner';

import MessageListContainer from './MessageListContainer';
import MessagerHeader from './MessagerHeader';
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
    <div className="w-full min-h-[100dvh] relative bg-impo_Neutral_Background">
      <MessagerHeader />

      <div
        className={`overflow-y-auto pb-20   bg-[url('/assets/images/bg-chat.webp')] bg-contain h-dvh  dark:bg-none ${styles.container} ${loading && 'pointer-events-none'}`}
        style={{ paddingTop: HEADER_HEIGHT + 10 }}
        ref={messageListRef}
      >
        {showLoading && (
          <div className="flex justify-center items-center absolute w-full">
            <Dark_Spinner size={30} />
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
    </div>
  );
};

export default NewPartnerMessagePage;
