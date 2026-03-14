import { ChatResponseType, MessageItemType } from '../../__hooks__/useMessageData/type';

export type MessagePropsType = Pick<ChatResponseType, 'partnerAvatar'> &
  Pick<MessageItemType, 'createTime' | 'side' | 'text'> & {};
