import { ChatResponseTypes } from '../types';

export interface ClinicChatFooterProps extends Pick<ChatResponseTypes, 'isRate' | 'state'> {}
