'use client';

import AiTopicChatbotList from './AiTopicChatbotList';
import WelcomingContainer from './WelcomingContainer';
import { WelcomingTypeEnum } from './WelcomingContainer/enum';

const AiTopicsChatbotPage = () => {
  // return <WelcomingContainer welcomingType={WelcomingTypeEnum.ChatbotMessage} />;
  return <AiTopicChatbotList />;
};

export default AiTopicsChatbotPage;
