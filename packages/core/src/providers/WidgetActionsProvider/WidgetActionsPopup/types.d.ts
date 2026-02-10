import { WidgetActionsProviderTypes } from '../types';
import { PopUpTypes } from './__hooks__/usePopUpHandlers/types';

export interface WidgetActionsPopupProps extends Pick<WidgetActionsProviderTypes, 'PopUpEditCycle'> {
  popUp: PopUpTypes;
  actionCompleteHandler: () => void;
}
