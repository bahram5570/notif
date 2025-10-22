import { useEffect, useRef, useState } from 'react';

import { parseFormattedText } from '../utils';
import chatbotJson from '@assets/lottie/chatbot.json';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

import WordFadeInText from '../WordFadeInText';
import { RoleEnum } from '../__hooks__/useGetHistoryChatData/enum';
import { AiChatbotMessageListPropsType } from './type';

const AiChatbotMessageList = ({ chats, isLoading, showErrorMessage, onError }: AiChatbotMessageListPropsType) => {
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
            style={{
              minHeight: index === chats.length - 1 && !isLoading && !showErrorMessage ? lastItemHeight : 'auto',
            }}
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
                  className="z-30 rounded-3xl px-5 py-3"
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
      {showErrorMessage && (
        <div ref={lastItemRef} style={{ minHeight: `calc(100dvh - 360px )` }} className="px-4">
          <div
            className=" rounded-3xl p-4 flex flex-col gap-4"
            style={{
              background: colors.Neutral_Surface,
              border: `1px solid ${colors.Surface_OutlineVariant}`,
            }}
          >
            <div className="flex flex-col items-end px-3">
              <Typography scale="Lable" size="Large">
                ارتباط با ایمپو برقرار نیست
              </Typography>
              <Typography scale="Body" size="Small">
                ظاهرا ارتباط با ایمپو قطع شده.میتونی دوباره تلاش کنی.
              </Typography>
            </div>

            <Button
              size="medium"
              variant="fill"
              fullWidth
              color="primary"
              onClick={onError}
              className="!min-w-fit px-2 py-3"
              navigationLoadingId="PredictFooter"
            >
              <Typography scale="Lable" size="Large" color="White">
                تلاش مجدد
              </Typography>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiChatbotMessageList;
