'use client';

import { useEffect, useState } from 'react';

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
import useGetAiChatbotData from './__hooks__/useGetAiChatbotData';
import useGetAiChatbotMessageList from './__hooks__/useGetAiChatbotMessageList';
import useSubmit from './__hooks__/useSubmit';

const AiChatbotPage = () => {
  const { isLoading, aiChatData, categoryIdData, itemIdData } = useGetAiChatbotData();
  const { addChatHandler, aiChatbotMessageList, updateChatHandler } = useGetAiChatbotMessageList();
  const {
    isLoading: newLoading,
    submitHandler,
    showErrorMessage,
    onErrorHandler,
    resetkey,
  } = useSubmit({ updateChatHandler, addChatHandler, categoryIdData, itemIdData });
  const { disableDeleteBtn, disableDeleteBtnHandler } = useDisableDeleteBtn({ aiChatData });
  const { currentDate } = useCurrentDate({ mediaLimitDate: aiChatData?.mediaLimitDate });

  const defaultQustionHandler = (text: string) => {
    submitHandler({ prompt: text });
  };

  const hasChatData = aiChatData && aiChatbotMessageList.length > 0;

  return (
    <>
      {isLoading && !aiChatData && <AiChatbotSkeleton />}
      {!isLoading && aiChatData && (
        <div className="relative h-[100dvh] ">
          <AiChatbotHeader
            welcomingType={WelcomingTypeEnum.ChatbotMessage}
            showActionMenu
            disableDeleteBtn={disableDeleteBtn}
            chatTitle={aiChatData.chatTitle}
            chatId={aiChatData.chatId}
            categoryIdData={categoryIdData}
            itemIdData={itemIdData}
            currentImageUsage={aiChatData.currentImageUsage}
            imageType={aiChatData.imageType}
            imageUsageLimit={aiChatData.imageUsageLimit}
            mediaLimitDate={currentDate}
          />

          {!hasChatData && (
            <>
              <AiChatbotEmptyState
                defaultQustionHandler={defaultQustionHandler}
                description={aiChatData.description}
                questions={aiChatData.questions}
                title={aiChatData.title}
              />
            </>
          )}

          {hasChatData && (
            <AiChatbotMessageListLayout>
              <AiChatbotMessageList
                chats={aiChatbotMessageList}
                isLoading={newLoading}
                defaultQustionHandler={defaultQustionHandler}
                disableDeleteBtnHandler={disableDeleteBtnHandler}
                showErrorMessage={showErrorMessage}
              />
              {showErrorMessage && <ErrorMessage onErrorHandler={onErrorHandler} />}
            </AiChatbotMessageListLayout>
          )}

          <AiChatbotFooter
            {...aiChatData}
            submitHandler={submitHandler}
            isLoading={newLoading}
            hasChatData={hasChatData}
            isShowFileInput={aiChatData.imageType}
            key={resetkey}
          />
        </div>
      )}
    </>
  );
};

export default AiChatbotPage;
