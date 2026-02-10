import { ActionTypes } from '@repo/core/providers/WidgetActionsProvider';

export type SignInteractiveBannerContextType = {
  isLoadedHandler: () => void;
  interactiveBannerActionHandler: (action: ActionTypes) => void;
};
