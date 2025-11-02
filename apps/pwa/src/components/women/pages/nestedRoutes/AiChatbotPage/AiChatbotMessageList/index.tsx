import { useEffect, useRef, useState } from 'react';

import chatbotJson from '@assets/lottie/chatbot.json';

import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { LottieJson } from '@lib/LottieJson';

import { RoleEnum } from '../__hooks__/useGetAiChatbotData/enum';
import AiMessage from './AiMessage';
import UserMessage from './UserMessage';
import { AiChatbotMessageListPropsType } from './type';

const AiChatbotMessageList = ({ chats, isLoading, defaultQustionHandler }: AiChatbotMessageListPropsType) => {
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
      <div className={`flex justify-end flex-col gap-4`} style={{ paddingBottom: HEADER_HEIGHT * 2 }}>
        {chats.map((chat, index) => {
          const isLastItem = index === chats.length - 1;

          return (
            <div
              key={index}
              style={{
                minHeight: index === chats.length - 1 && !isLoading ? lastItemHeight : 'auto',
              }}
              className="pr-4"
              ref={index === chats.length - 1 ? lastItemRef : null}
            >
              {chat.role === RoleEnum.User && <UserMessage {...chat} />}
              {chat.role === RoleEnum.Assistant && (
                <AiMessage {...chat} isLastItem={isLastItem} defaultQustionHandler={defaultQustionHandler} />
              )}
            </div>
          );
        })}

        {isLoading && (
          <div
            ref={lastItemRef}
            className="flex justify-start items-baseline"
            style={{ minHeight: `calc(100dvh - 360px )` }}
          >
            <div className="flex items-center rounded-full !bg-white/40 shadow-lg glass-card   px-4">
              <Typography scale="Body" size="Medium">
                دارم فکر میکنم...
              </Typography>
              <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} className="w-14 h-14" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiChatbotMessageList;
