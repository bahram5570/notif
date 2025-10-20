import { useEffect, useRef, useState } from 'react';

import { parseFormattedText } from '../utils';
import chatbotJson from '@assets/lottie/chatbot.json';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

import WordFadeInText from '../WordFadeInText';
import { RoleEnum } from '../__hooks__/useGetHistoryChatData/enum';
import { AiChatbotMessageListPropsType } from './type';

const AiChatbotMessageList = ({ chats, isLoading }: AiChatbotMessageListPropsType) => {
  const { colors, typography } = useTheme();
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
    <div className="flex flex-col gap-4 " style={{ marginBottom: '200px', paddingTop: HEADER_HEIGHT }}>
      {chats.map((chat, index) => {
        const formattedLine = parseFormattedText(chat.text);

        return (
          <div
            key={index}
            style={{ minHeight: index === chats.length - 1 && !isLoading ? lastItemHeight : 'auto' }}
            ref={index === chats.length - 1 ? lastItemRef : null}
          >
            <div
              className={`flex items-center ml-3 mx-auto ${
                chat.role === RoleEnum.User ? 'justify-start   max-w-[360px]' : 'justify-end max-w-none'
              }`}
            >
              {chat.isAnswered ? (
                <WordFadeInText text={chat.text} />
              ) : (
                <p
                  className={` z-30 rounded-full px-5 py-3 ${chat.role === RoleEnum.User && 'text-center'}`}
                  style={{
                    direction: 'rtl',
                    ...typography.Body.Large,
                    whiteSpace: 'pre-wrap',
                    background: chat.role === RoleEnum.User ? colors.Surface_SurfaceVariant : 'transparent',
                  }}
                  dangerouslySetInnerHTML={{ __html: formattedLine.replace(/\n/g, '<br/>') + '&nbsp;' }}
                />
              )}
            </div>
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
  );
};

export default AiChatbotMessageList;
