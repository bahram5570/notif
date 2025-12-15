'use client';

import { useEffect } from 'react';

import { getSessionStoragePromptText } from '@utils/aiChatbot';

import AiChatbotHeader from '@components/ui/__AiChatbot__/AiChatbotHeader';
import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';

import AiChatbotEmptyState from './AiChatbotEmptyState';
import AiChatbotFooter from './AiChatbotFooter';
import AiChatbotMessageList from './AiChatbotMessageList';
import AiChatbotMessageListLayout from './AiChatbotMessageList/AiChatbotMessageListLayout';
import ErrorMessage from './AiChatbotMessageList/ErrorMessage';
import AiChatbotSkeleton from './AiChatbotSkeleton';
import useDisableDeleteBtn from './__hooks__/useDisableDeleteBtn';
import useSubmit from './__hooks__/useSubmit';

const AiChatbotPage = () => {
  const { chatData, isLoading } = useAichatbotHistoryManager();
  const { isLoading: newLoading, submitHandler, showErrorMessage, onErrorHandler } = useSubmit();
  const { disableDeleteBtn, disableDeleteBtnHandler } = useDisableDeleteBtn({ aiChatData: chatData });

  const defaultQustionHandler = (text: string) => {
    submitHandler({ prompt: text });
  };

  const hasChatData = chatData && chatData.chats.length > 0;

  useEffect(() => {
    if (!chatData) return;

    const promptText = getSessionStoragePromptText();

    if (promptText) {
      submitHandler({ prompt: promptText, imageId: [] });
    }
  }, [chatData]);

  return (
    <>
      {isLoading && !chatData && <AiChatbotSkeleton />}
      {!isLoading && chatData && (
        <>
          <AiChatbotHeader
            showActionMenu
            disableDeleteBtn={disableDeleteBtn}
            chatTitle={chatData.chatTitle}
            currentImageUsage={chatData.currentImageUsage}
            imageType={chatData.imageType}
            imageUsageLimit={chatData.imageUsageLimit}
            mediaLimitDate={chatData.mediaLimitDate}
          />

          {!hasChatData && (
            <>
              <AiChatbotEmptyState
                defaultQustionHandler={defaultQustionHandler}
                description={chatData.description}
                questions={chatData.questions}
                title={chatData.title}
              />
            </>
          )}

          {hasChatData && (
            <AiChatbotMessageListLayout imageType={chatData.imageType}>
              <AiChatbotMessageList
                chats={chatData.chats}
                isLoading={newLoading}
                defaultQustionHandler={defaultQustionHandler}
                disableDeleteBtnHandler={disableDeleteBtnHandler}
                showErrorMessage={showErrorMessage}
              />
              {showErrorMessage && <ErrorMessage onErrorHandler={onErrorHandler} />}
            </AiChatbotMessageListLayout>
          )}

          <AiChatbotFooter
            {...chatData}
            submitHandler={submitHandler}
            isLoading={newLoading}
            hasChatData={hasChatData}
            isShowFileInput={chatData.imageType}
          />
        </>
      )}
    </>
  );
};

export default AiChatbotPage;
