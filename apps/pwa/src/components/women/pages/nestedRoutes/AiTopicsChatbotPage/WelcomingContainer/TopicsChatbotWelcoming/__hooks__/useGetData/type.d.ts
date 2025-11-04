import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

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
