import { ActionTypes } from '../../widgetCommon';

export interface PopUpTimerInteractionTypes {
  actionCompleteHandler: () => void;
  data: {
    icon: string;
    title: string;
    second: number;
    action: ActionTypes;
    description: string;
  };
}
