import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type ChatItemType = {
  role: string;
  text: string;
  messageId: string;
  like: boolean;
  dislike: boolean;
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
