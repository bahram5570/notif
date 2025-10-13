import { UseSubmitPropsType } from '../useSubmit/type';

export type UseEventSourcePropsType = Pick<UseSubmitPropsType, 'addChatHandler'> & {};

export type StreamHandlerPropsType = {
  id: string;
};
