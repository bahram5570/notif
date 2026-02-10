import { ActionTypes } from '@repo/core/providers/WidgetActionsProvider';

import { RoleEnum } from './enum';

export type ChatItemType = {
  role: RoleEnum;
  text: string;
  messageId: string;
  like: boolean;
  dislike: boolean;
  isAnswered?: boolean;
  media: string[];
};

export type AiChatbotDataResponseType = {
  title: string;
  description: string;
  placeholder: string;
  activeRating: true;
  chatId: string;
  chatTitle: string;
  feedbackMessage: string;
  hintPromptText: string;
  isActive: boolean;
  deactiveMessage: string;
  currentImageUsage: number;
  imageUsageLimit: number;
  deactiveTitle: string;
  activaMedia: boolean;
  mediaLimitDate: string;
  imageType: boolean;
  deactiveButton: {
    backgroundColor: string;
    foregroundColor: string;
    text: string;
    action: ActionTypes;
  };
  chats: ChatItemType[];
  questions: string[];
};
