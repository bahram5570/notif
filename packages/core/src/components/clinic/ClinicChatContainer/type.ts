import { ChatsTypes } from '../types';

export interface ClinicChatContainerMakerProps extends Pick<ChatsTypes, 'dateTime' | 'sideType'> {
  children: React.ReactNode;
  width: number | 'fit-content';
}
