import { ChatResponseTypes } from '@repo/core/components/clinic';

export interface ChatFooterProps extends Pick<ChatResponseTypes, 'isRate' | 'state'> {}
