import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type SignInteractiveBannerContextType = {
  isLoadedHandler: () => void;
  interactiveBannerActionHandler: (action: ActionTypes) => void;
};
