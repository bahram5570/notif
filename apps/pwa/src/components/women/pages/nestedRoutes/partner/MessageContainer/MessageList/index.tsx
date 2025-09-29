import useTheme from '@hooks/useTheme';

import MessageItem from './MessageItem';
import { MessageListPropsType } from './type';

const MessageList = ({ messages }: MessageListPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col gap-5">
      {messages.map((message) => {
        return (
          <div key={message.messageId} className={`${message.fromMan ? `pr-6` : `pl-6`}`}>
            <div
              className={` rounded-t-2xl ${message.fromMan ? `rounded-r-2xl relative` : `rounded-l-2xl`}  min-h-[70px] p-1`}
              style={{
                border: message.fromMan
                  ? `1px solid ${colors.PrimaryMan_PrimaryMan}`
                  : `1px solid ${colors.PrimaryWoman_Primary}`,
              }}
            >
              <MessageItem {...message} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
