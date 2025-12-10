import { useEffect } from 'react';

import { RoleEnum } from '@providers/__aiChatbot__/AiChatHistoryManagerProvider/__hook__/useGetData/enum';

import AiChatbotMessageListLoading from './AiChatbotMessageListLoading';
import AiMessage from './AiMessage';
import UserMessage from './UserMessage';
import useLastItemHeight from './__hooks__/useLastItemHeight';
import { AiChatbotMessageListPropsType } from './type';

const AiChatbotMessageList = (props: AiChatbotMessageListPropsType) => {
  const { lastItemHeight, lastItemRef } = useLastItemHeight({ chatLength: props.chats.length });

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.chats, props.isLoading]);

  return (
    <>
      {props.chats.map((chat, index) => {
        const isLastItem = index === props.chats.length - 1;
        const minHeight = isLastItem && !props.isLoading && !props.showErrorMessage ? lastItemHeight : 'auto';

        return (
          <div
            key={index}
            style={{
              minHeight,
            }}
            className="pr-2"
            ref={isLastItem ? lastItemRef : null}
          >
            {chat.role === RoleEnum.User && <UserMessage {...chat} />}
            {chat.role === RoleEnum.Assistant && (
              <AiMessage
                {...chat}
                isLastItem={isLastItem}
                defaultQustionHandler={props.defaultQustionHandler}
                disableDeleteBtnHandler={props.disableDeleteBtnHandler}
              />
            )}
          </div>
        );
      })}
      {props.isLoading && <AiChatbotMessageListLoading />}
    </>
  );
};

export default AiChatbotMessageList;
