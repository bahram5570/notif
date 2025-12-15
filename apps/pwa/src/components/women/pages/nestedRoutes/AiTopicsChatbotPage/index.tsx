'use client';

import { useEffect, useState } from 'react';

import { getWelcomingHandler } from '@utils/aiChatBotWelcoming';

import AiChatbotHeader from '@components/ui/__AiChatbot__/AiChatbotHeader';

import AiTopicChatbotList from './AiTopicChatbotList';
import AiTopicsChatbotWelcoming from './AiTopicsChatbotWelcoming';

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

  return (
    <>
      <AiChatbotHeader showActionMenu={isWelcoming ? false : true} showSuggestionBtn={!isWelcoming} />
      {isWelcoming ? <AiTopicsChatbotWelcoming onUpdateKeyHandler={onUpdateKeyHandler} /> : <AiTopicChatbotList />}
    </>
  );
};

export default AiTopicsChatbotPage;
