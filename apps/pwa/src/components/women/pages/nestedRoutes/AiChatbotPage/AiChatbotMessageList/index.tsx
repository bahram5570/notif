import { useEffect, useRef, useState } from 'react';

import chatbotJson from '@assets/lottie/chatbot.json';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { LottieJson } from '@lib/LottieJson';

import { RoleEnum } from '../__hooks__/useGetAiChatbotData/enum';
import AiMessage from './AiMessage';
import UserMessage from './UserMessage';
import { AiChatbotMessageListPropsType } from './type';

const AiChatbotMessageList = ({ chats, isLoading }: AiChatbotMessageListPropsType) => {
  const lastItemRef = useRef<HTMLDivElement>(null);
  const hasSetInitialHeight = useRef(false);
  const [lastItemHeight, setLastItemHeight] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!hasSetInitialHeight.current && chats.length > 0) {
      setLastItemHeight(`calc(100vh - ${HEADER_HEIGHT + 300}px )`);
      hasSetInitialHeight.current = true;
    }
  }, [chats.length]);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chats, isLoading]);

  return (
    <div>
      <div className={`flex justify-end flex-col gap-3`} style={{ paddingBottom: HEADER_HEIGHT + 20 }}>
        {chats.map((chat, index) => {
          return (
            <div
              key={index}
              style={{
                minHeight: index === chats.length - 1 && !isLoading ? lastItemHeight : 'auto',
              }}
              ref={index === chats.length - 1 ? lastItemRef : null}
            >
              {chat.role === RoleEnum.User && <UserMessage {...chat} />}
              {chat.role === RoleEnum.Assistant && <AiMessage {...chat} />}
            </div>
          );
        })}

        {isLoading && (
          <div ref={lastItemRef} style={{ minHeight: `calc(100dvh - 360px )` }}>
            <div className="flex justify-end items-center ml-3">
              <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} className="w-14 h-14" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiChatbotMessageList;
