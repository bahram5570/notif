import { ChatsTypes } from '@repo/core/components/clinic';

export interface MessageGeneratorProps extends ChatsTypes {}

export interface ChatContainerMakerProps extends Pick<ChatsTypes, 'dateTime' | 'sideType'> {
  children: React.ReactNode;
  width: number | 'fit-content';
}

export interface MessageGeneratorMediaProps extends Pick<ChatsTypes, 'dateTime' | 'sideType'> {
  media: string;
}
