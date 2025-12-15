import { AiChatbotHeaderPropsType } from '../type';

export type AiChatbotLimitUploadMessagePropsType = Pick<
  AiChatbotHeaderPropsType,
  'currentImageUsage' | 'imageUsageLimit' | 'mediaLimitDate'
>;
