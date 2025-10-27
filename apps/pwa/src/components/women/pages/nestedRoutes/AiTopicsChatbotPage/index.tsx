'use client';

import AiTopicChatbotList from './AiTopicChatbotList';
import WelcomingContainer from './WelcomingContainer';
import { SHOW_TOPICS_WELCOMING } from './WelcomingContainer/TopicsChatbotWelcoming/constants';
import { WelcomingTypeEnum } from './WelcomingContainer/enum';

const AiTopicsChatbotPage = () => {
  const isShowTopicsWelcom = localStorage.getItem(SHOW_TOPICS_WELCOMING);
  const checkShowTopicsWelcom = isShowTopicsWelcom && JSON.parse(isShowTopicsWelcom);

  if (checkShowTopicsWelcom) {
    return <WelcomingContainer welcomingType={WelcomingTypeEnum.TopicsPage} />;
  }

  return <AiTopicChatbotList />;
};

export default AiTopicsChatbotPage;
