import { useEffect, useRef, useState } from 'react';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import { RoleEnum } from '../__hooks__/useGetAiChatbotData/enum';
import AiChatbotMessageListLayout from './AiChatbotMessageListLayout';
import AiChatbotMessageListLoading from './AiChatbotMessageListLoading';
import AiMessage from './AiMessage';
import ErrorMessage from './ErrorMessage';
import UserMessage from './UserMessage';
import { AiChatbotMessageListPropsType } from './type';

const AiChatbotMessageList = ({
  chats,
  isLoading,
  defaultQustionHandler,
  disableDeleteBtnHandler,
  showErrorMessage,
}: AiChatbotMessageListPropsType) => {
  const lastItemRef = useRef<HTMLDivElement>(null);
  const hasSetInitialHeight = useRef(false);
  const [lastItemHeight, setLastItemHeight] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!hasSetInitialHeight.current && chats.length > 0) {
      setLastItemHeight(`calc(100vh - ${HEADER_HEIGHT + 200}px )`);
      hasSetInitialHeight.current = true;
    }
  }, [chats.length]);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chats, isLoading]);

  return (
    <AiChatbotMessageListLayout>
      <>
        {chats.map((chat, index) => {
          const isLastItem = index === chats.length - 1;

          return (
            <div
              key={index}
              style={{
                minHeight: index === chats.length - 1 && !isLoading && !showErrorMessage ? lastItemHeight : 'auto',
              }}
              className="pr-2"
              ref={index === chats.length - 1 ? lastItemRef : null}
            >
              {chat.role === RoleEnum.User && <UserMessage {...chat} />}
              {chat.role === RoleEnum.Assistant && (
                <AiMessage
                  {...chat}
                  isLastItem={isLastItem}
                  defaultQustionHandler={defaultQustionHandler}
                  disableDeleteBtnHandler={disableDeleteBtnHandler}
                />
              )}
            </div>
          );
        })}
        {isLoading && <AiChatbotMessageListLoading />}
        {showErrorMessage && <ErrorMessage />}
      </>
    </AiChatbotMessageListLayout>
  );
};

export default AiChatbotMessageList;
