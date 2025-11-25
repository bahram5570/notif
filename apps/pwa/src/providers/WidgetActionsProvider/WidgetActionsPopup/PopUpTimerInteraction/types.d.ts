import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

import { WidgetActionsPopupProps } from '../types';

type ItemsTypes = Pick<WidgetActionsPopupProps, 'timerInteractionCompleteHandler'>;
export interface PopUpTimerInteractionTypes extends ItemsTypes {
  data: {
    icon: string;
    title: string;
    second: number;
    action: ActionTypes;
    description: string;
  };
}
