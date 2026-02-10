import { ActionTypes } from '@repo/core/providers/WidgetActionsProvider';

export type ResponseAiChatWelcomingType = {
  title: string;
  description: string;
  button: {
    backgroundColor: string;
    foregroundColor: string;
    text: string;
    action: ActionTypes;
  };
};
