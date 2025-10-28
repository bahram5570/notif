'use client';

import { useEffect, useState } from 'react';

import { getWelcomingHandler } from '@utils/aiChatBotWelcoming';

import AiTopicChatbotList from './AiTopicChatbotList';
import WelcomingContainer from './WelcomingContainer';
import { WelcomingTypeEnum } from './WelcomingContainer/enum';

const AiTopicsChatbotPage = () => {
  // const [isWelcoming, setIsWelcoming] = useState<boolean>(false);

  // useEffect(() => {
  //   const welcoming = getWelcomingHandler();
  //   if (welcoming) {
  //     setIsWelcoming(JSON.parse(welcoming));
  //   }
  // }, []);

  // if (isWelcoming) {
  //   return <WelcomingContainer welcomingType={WelcomingTypeEnum.TopicsPage} />;
  // }

  return <AiTopicChatbotList />;
};

export default AiTopicsChatbotPage;
