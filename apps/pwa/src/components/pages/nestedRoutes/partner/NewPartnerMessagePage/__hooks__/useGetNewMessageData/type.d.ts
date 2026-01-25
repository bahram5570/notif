import { ItemPropsType } from '../../MessageListContainer/Message/type';

export type UseGetNewMessageDataPropsType = {
  lastMessageId: string | undefined;
  messageHandler: (message: ItemPropsType[]) => void;
  chatToken: string;
  timeInterval: number;
};
