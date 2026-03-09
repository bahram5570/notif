import MessageItem from './MessageItem';
import { MessageListPropsType } from './type';

const MessageList = ({ messages }: MessageListPropsType) => {
  return (
    <div className="flex flex-col gap-5">
      {messages.map((message) => {
        return (
          <div key={message.messageId} className={`${!message.fromMan ? `pr-6` : `pl-6`}`}>
            <div
              className={` rounded-t-2xl border ${!message.fromMan ? `rounded-r-2xl relative border-impo_Primary_Primary` : `rounded-l-2xl  border-impo_PrimaryMan_PrimaryMan`}  min-h-[70px] p-1  `}
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
