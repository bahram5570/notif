import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type SignInteractiveBannerContextType = {
  interactiveBannerActionHandler: (action: ActionTypes) => void;
};
