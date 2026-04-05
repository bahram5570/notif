import { ActionTypes } from '../../../providers/WidgetActionsProvider';

export type SignInteractiveBannerContextType = {
  isLoadedHandler: () => void;
  interactiveBannerActionHandler: (action: ActionTypes) => void;
};
