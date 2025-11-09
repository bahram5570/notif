'use client';

import { useEffect, useState } from 'react';

import AiChatbotHeader from '../AiTopicsChatbotPage/AiChatbotHeader';
import { WelcomingTypeEnum } from '../AiTopicsChatbotPage/WelcomingContainer/enum';
import AiChatbotEmptyState from './AiChatbotEmptyState';
import AiChatbotFooter from './AiChatbotFooter';
import AiChatbotMessageList from './AiChatbotMessageList';
import AiChatbotSkeleton from './AiChatbotSkeleton';
import useGetAiChatbotData from './__hooks__/useGetAiChatbotData';
import useGetAiChatbotMessageList from './__hooks__/useGetAiChatbotMessageList';
import useSubmit from './__hooks__/useSubmit';

const AiChatbotPage = () => {
  const { isLoading, aiChatData } = useGetAiChatbotData();
  const { addChatHandler, aiChatbotMessageList, updateChatHandler } = useGetAiChatbotMessageList();
  const {
    isLoading: newLoading,
    submitHandler,
    showErrorMessage,
    onErrorHandler,
  } = useSubmit({ updateChatHandler, addChatHandler });
  const [disableDeleteBtn, setDisableDeleteBtn] = useState(false);

  const defaultQustionHandler = (text: string) => {
    submitHandler(text);
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
            <AiChatbotMessageList
              chats={aiChatbotMessageList}
              isLoading={newLoading}
              defaultQustionHandler={defaultQustionHandler}
              disableDeleteBtnHandler={disableDeleteBtnHandler}
              showErrorMessage={showErrorMessage}
              onErrorHandler={onErrorHandler}
            />
          )}

          <AiChatbotFooter
            {...aiChatData}
            submitHandler={submitHandler}
            isLoading={newLoading}
            hasChatData={hasChatData}
          />
        </>
      )}
    </>
  );
};

export default AiChatbotPage;
