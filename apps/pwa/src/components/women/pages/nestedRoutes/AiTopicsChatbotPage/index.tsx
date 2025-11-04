'use client';

import { useEffect, useState } from 'react';

import { getWelcomingHandler } from '@utils/aiChatBotWelcoming';

import AiChatbotHeader from './AiChatbotHeader';
import AiTopicChatbotList from './AiTopicChatbotList';
import WelcomingContainer from './WelcomingContainer';
import { WelcomingTypeEnum } from './WelcomingContainer/enum';

const AiTopicsChatbotPage = () => {
  const [isWelcoming, setIsWelcoming] = useState<string | null>(null);
  const [updateKey, setUpdateKey] = useState(Math.random());

  const onUpdateKeyHandler = () => {
    setUpdateKey(Math.random());
  };

  useEffect(() => {
    const welcoming = getWelcomingHandler();

    setIsWelcoming(welcoming);
  }, [updateKey]);

  if (isWelcoming) {
    return (
      <>
        <AiChatbotHeader welcomingType={WelcomingTypeEnum.TopicsPage} showActionMenu={false} />
        <WelcomingContainer welcomingType={WelcomingTypeEnum.TopicsPage} onUpdateKeyHandler={onUpdateKeyHandler} />
      </>
    );
  }

  return <AiTopicChatbotList />;
};

export default AiTopicsChatbotPage;
