import { ChatResponseType, MessageItemType } from '../__hooks__/useMessageData/type';

type itemType = Pick<ChatResponseType, 'partnerAvatar' | 'items'>;

export interface MessageListContainerPropsType extends itemType {}
