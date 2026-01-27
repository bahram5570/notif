import { PopUpTypes } from './__hooks__/usePopUpHandlers/types';

export interface WidgetActionsPopupProps {
  popUp: PopUpTypes;
  actionCompleteHandler: () => void;
}
