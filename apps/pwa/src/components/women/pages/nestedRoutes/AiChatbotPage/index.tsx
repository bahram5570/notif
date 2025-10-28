'use client';

import AiChatbotHeader from '../AiTopicsChatbotPage/AiChatbotHeader';
import WelcomingContainer from '../AiTopicsChatbotPage/WelcomingContainer';
import { WelcomingTypeEnum } from '../AiTopicsChatbotPage/WelcomingContainer/enum';
import useGetAiChatbotData from './__hooks__/useGetAiChatbotData';

const AiChatbotPage = () => {
  const { data, isLoading } = useGetAiChatbotData();
  const hasChatData = data && data.chats.length > 0;
  return (
    <>
      {!hasChatData && (
        <WelcomingContainer
          welcomingType={WelcomingTypeEnum.ChatbotMessage}
          title={data?.chatTitle || ''}
          questions={data?.questions || []}
          description={data?.description || ''}
          hintPromptText={data?.hintPromptText || ''}
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
        </div>
      )}
    </>
  );
};

export default AiChatbotPage;
