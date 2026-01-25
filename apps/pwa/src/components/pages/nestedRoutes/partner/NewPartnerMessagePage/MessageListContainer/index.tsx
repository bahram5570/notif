import Message from './Message';
import { MessageListContainerPropsType } from './type';

const MessageListContainer = ({ messageList }: MessageListContainerPropsType) => {
  return (
    <div className="flex flex-col-reverse">
      {messageList.map((item, index) => (
        <div key={index}>
          <Message {...item} />
        </div>
      ))}
    </div>
  );
};

export default MessageListContainer;
