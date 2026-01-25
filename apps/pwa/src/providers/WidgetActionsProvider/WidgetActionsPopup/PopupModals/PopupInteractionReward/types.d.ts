import { WidgetsButtonTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export interface PopupInteractionRewardProps {
  data: {
    title: string;
    image: string;
    description: string;
    button: WidgetsButtonTypes;
  };
  hasTwoStepsInteractionReward: boolean;
}
