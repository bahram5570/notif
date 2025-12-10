'use client';

import { useEffect } from 'react';

import { getSessionStoragePromptText } from '@utils/aiChatbot';

import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';

import AiChatbotHeader from '../AiTopicsChatbotPage/AiChatbotHeader';
import { WelcomingTypeEnum } from '../AiTopicsChatbotPage/WelcomingContainer/enum';
import AiChatbotEmptyState from './AiChatbotEmptyState';
import AiChatbotFooter from './AiChatbotFooter';
import AiChatbotMessageList from './AiChatbotMessageList';
import AiChatbotMessageListLayout from './AiChatbotMessageList/AiChatbotMessageListLayout';
import ErrorMessage from './AiChatbotMessageList/ErrorMessage';
import AiChatbotSkeleton from './AiChatbotSkeleton';
import useCurrentDate from './__hooks__/useCurrentDate';
import useDisableDeleteBtn from './__hooks__/useDisableDeleteBtn';
import useSubmit from './__hooks__/useSubmit';

const AiChatbotPage = () => {
  const { categoryIdData, chatData, isLoading, itemIdData } = useAichatbotHistoryManager();

  const { isLoading: newLoading, submitHandler, showErrorMessage, onErrorHandler, resetkey } = useSubmit();
  const { disableDeleteBtn, disableDeleteBtnHandler } = useDisableDeleteBtn({ aiChatData: chatData });
  const { currentDate } = useCurrentDate({ mediaLimitDate: chatData?.mediaLimitDate });

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

  console.log(chatData);
  return (
    <>
      {isLoading && !chatData && <AiChatbotSkeleton />}
      {!isLoading && chatData && (
        <>
          <AiChatbotHeader
            welcomingType={WelcomingTypeEnum.ChatbotMessage}
            showActionMenu
            disableDeleteBtn={disableDeleteBtn}
            chatTitle={chatData.chatTitle}
            chatId={chatData.chatId}
            categoryIdData={categoryIdData}
            itemIdData={itemIdData}
            currentImageUsage={chatData.currentImageUsage}
            imageType={chatData.imageType}
            imageUsageLimit={chatData.imageUsageLimit}
            mediaLimitDate={currentDate}
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
            key={resetkey}
          />
        </>
      )}
    </>
  );
};

export default AiChatbotPage;
