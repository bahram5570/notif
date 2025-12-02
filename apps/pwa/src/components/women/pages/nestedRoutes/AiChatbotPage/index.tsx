'use client';

import { useEffect, useState } from 'react';

import AiChatbotHeader from '../AiTopicsChatbotPage/AiChatbotHeader';
import { WelcomingTypeEnum } from '../AiTopicsChatbotPage/WelcomingContainer/enum';
import AiChatbotEmptyState from './AiChatbotEmptyState';
import AiChatbotFooter from './AiChatbotFooter';
import AiChatbotLimitUploadMessage from './AiChatbotLimitUploadMessage';
import AiChatbotMessageList from './AiChatbotMessageList';
import AiChatbotSkeleton from './AiChatbotSkeleton';
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
  const [disableDeleteBtn, setDisableDeleteBtn] = useState(false);

  const defaultQustionHandler = (text: string) => {
    submitHandler({ prompt: text });
  };

  const hasChatData = aiChatData && aiChatbotMessageList.length > 0;

  useEffect(() => {
    if (aiChatData) {
      if (aiChatData.chats.length > 0) {
        setDisableDeleteBtn(true);
      } else {
        setDisableDeleteBtn(false);
      }
    }
  }, [aiChatData]);

  const disableDeleteBtnHandler = (v: boolean) => {
    setDisableDeleteBtn(v);
  };

  return (
    <>
      {isLoading && !aiChatData && <AiChatbotSkeleton />}
      {!isLoading && aiChatData && (
        <>
          <AiChatbotHeader
            welcomingType={WelcomingTypeEnum.ChatbotMessage}
            showActionMenu
            disableDeleteBtn={disableDeleteBtn}
            chatTitle={aiChatData.chatTitle}
            chatId={aiChatData.chatId}
            categoryIdData={categoryIdData}
            itemIdData={itemIdData}
          />
          {!hasChatData && (
            <>
              <AiChatbotEmptyState
                defaultQustionHandler={defaultQustionHandler}
                description={aiChatData.description}
                disableDeleteBtn={disableDeleteBtn}
                questions={aiChatData.questions}
                title={aiChatData.title}
              />
            </>
          )}

          {hasChatData && (
            <>
              {aiChatData.imageType && aiChatData.imageUsageLimit > 0 && (
                <AiChatbotLimitUploadMessage
                  currentImageUsage={aiChatData.currentImageUsage}
                  imageUsageLimit={aiChatData.imageUsageLimit}
                  mediaLimitDate={aiChatData.mediaLimitDate}
                />
              )}

              <AiChatbotMessageList
                chats={aiChatbotMessageList}
                isLoading={newLoading}
                defaultQustionHandler={defaultQustionHandler}
                disableDeleteBtnHandler={disableDeleteBtnHandler}
                showErrorMessage={showErrorMessage}
                onErrorHandler={onErrorHandler}
              />
            </>
          )}

          <AiChatbotFooter
            {...aiChatData}
            submitHandler={submitHandler}
            isLoading={newLoading}
            hasChatData={hasChatData}
            isShowFileInput={aiChatData.imageType}
            key={resetkey}
          />
        </>
      )}
    </>
  );
};

export default AiChatbotPage;
