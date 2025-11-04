'use client';

import { useEffect, useState } from 'react';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import AiChatbotHeader from '../AiTopicsChatbotPage/AiChatbotHeader';
import WelcomingContainer from '../AiTopicsChatbotPage/WelcomingContainer';
import { WelcomingTypeEnum } from '../AiTopicsChatbotPage/WelcomingContainer/enum';
import AiChatbotFooter from './AiChatbotFooter';
import AiChatbotMessageList from './AiChatbotMessageList';
import AiChatbotSkeleton from './AiChatbotSkeleton';
import ErrorMessage from './ErrorMessage';
import useGetAiChatbotData from './__hooks__/useGetAiChatbotData';
import useGetAiChatbotMessageList from './__hooks__/useGetAiChatbotMessageList';
import useSubmit from './__hooks__/useSubmit';

const AiChatbotPage = () => {
  const { isLoading, aiChatData } = useGetAiChatbotData();
  const { addChatHandler, aiChatbotMessageList, updateChatHandler, isLoading: loading } = useGetAiChatbotMessageList();
  const { isLoading: newLoading, submitHandler, showErrorMessage } = useSubmit({ updateChatHandler, addChatHandler });
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
          {!hasChatData && (
            <>
              <AiChatbotHeader
                welcomingType={WelcomingTypeEnum.ChatbotMessage}
                showActionMenu
                disableDeleteBtn={disableDeleteBtn}
              />
              <WelcomingContainer
                welcomingType={WelcomingTypeEnum.ChatbotMessage}
                title={aiChatData.title}
                questions={aiChatData.questions}
                description={aiChatData.description}
                defaultQustionHandler={defaultQustionHandler}
              />
            </>
          )}

          {hasChatData && (
            <div
              style={{
                background:
                  'linear-gradient(360deg, rgba(215, 186, 253, 0.2) -15.17%, rgba(194, 211, 251, 0.3) 30.1%, rgba(199, 234, 241, 0.25) 75.9%, rgba(230, 240, 232, 0.25) 104.51%)',
              }}
              className="min-h-screen relative"
            >
              <AiChatbotHeader
                welcomingType={WelcomingTypeEnum.ChatbotMessage}
                showActionMenu
                disableDeleteBtn={disableDeleteBtn}
              />
              <div style={{ paddingTop: HEADER_HEIGHT * 2 }} className="px-4 flex flex-col gap-3">
                <AiChatbotMessageList
                  chats={aiChatbotMessageList}
                  isLoading={newLoading || loading}
                  defaultQustionHandler={defaultQustionHandler}
                  disableDeleteBtnHandler={disableDeleteBtnHandler}
                />
                {showErrorMessage && <ErrorMessage />}
              </div>
            </div>
          )}

          <AiChatbotFooter
            {...aiChatData}
            submitHandler={submitHandler}
            isLoading={newLoading || loading}
            hasChatData={hasChatData}
          />
        </>
      )}
    </>
  );
};

export default AiChatbotPage;
