import { ItemPropsType } from '../../MessageListContainer/Message/type';

export type UseSubmitPropsType = {
  newMessageHandler: (message: ItemPropsType) => void;
  restHandler: () => void;
  chatToken: string;
};

export type ResponseType = {
  id: string;
  valid: boolean;
};
