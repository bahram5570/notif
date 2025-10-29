import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

import { RoleEnum } from './enum';

export type ChatItemType = {
  role: RoleEnum;
  text: string;
  messageId: string;
  like: boolean;
  dislike: boolean;
  isAnswered?: boolean;
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
  deactiveButton: {
    backgroundColor: string;
    foregroundColor: string;
    text: string;
    action: ActionTypes;
  };
  chats: ChatItemType[];
  questions: string[];
};
