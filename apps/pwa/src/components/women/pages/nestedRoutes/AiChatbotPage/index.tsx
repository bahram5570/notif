'use client';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import AiChatbotHeader from '../AiTopicsChatbotPage/AiChatbotHeader';
import WelcomingContainer from '../AiTopicsChatbotPage/WelcomingContainer';
import { WelcomingTypeEnum } from '../AiTopicsChatbotPage/WelcomingContainer/enum';
import AiChatbotFooter from './AiChatbotFooter';
import AiChatbotMessageList from './AiChatbotMessageList';
import AiChatbotSkeleton from './AiChatbotSkeleton';
import ErrorMessage from './ErrorMessage';
import SuggestedQuestions from './Suggestedquestions';
import useGetAiChatbotData from './__hooks__/useGetAiChatbotData';
import useSubmit from './__hooks__/useSubmit';

const AiChatbotPage = () => {
  const { isLoading, addChatHandler, aiChatData, updateChatHandler, aiChatbotMessageList } = useGetAiChatbotData();
  const { isLoading: newLoading, submitHandler, showErrorMessage } = useSubmit({ updateChatHandler, addChatHandler });

  const hasChatData = aiChatData && aiChatbotMessageList.length > 0;
  return (
    <>
      {isLoading && !aiChatData && <AiChatbotSkeleton />}
      {!isLoading && aiChatData && (
        <>
          {!hasChatData && (
            <WelcomingContainer
              welcomingType={WelcomingTypeEnum.ChatbotMessage}
              title={aiChatData.chatTitle}
              questions={aiChatData.questions}
              description={aiChatData.description}
              hintPromptText={aiChatData.hintPromptText}
            />
          )}
          {hasChatData && (
            <div
              style={{
                background:
                  'linear-gradient(360deg, rgba(215, 186, 253, 0.5) -15.17%, rgba(194, 211, 251, 0.5) 30.1%, rgba(199, 234, 241, 0.5) 75.9%, rgba(230, 240, 232, 0.5) 104.51%)',
              }}
              className="min-h-screen relative"
            >
              <AiChatbotHeader welcomingType={WelcomingTypeEnum.ChatbotMessage} />
              <div style={{ paddingTop: HEADER_HEIGHT * 2 }} className="px-4 flex flex-col gap-3">
                <AiChatbotMessageList chats={aiChatbotMessageList} isLoading={isLoading} />
                {showErrorMessage && <ErrorMessage />}
                <SuggestedQuestions messageId="" />
              </div>
            </div>
          )}
          <AiChatbotFooter {...aiChatData} submitHandler={submitHandler} isLoading={newLoading} />
        </>
      )}
    </>
  );
};

export default AiChatbotPage;
