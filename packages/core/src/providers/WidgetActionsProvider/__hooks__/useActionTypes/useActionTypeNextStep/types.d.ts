import { PopUpTypes } from '../../../WidgetActionsPopup/__hooks__/usePopUpHandlers/types';
import { NextStepTypes } from '../../../widgetCommon';

export interface UseActionTypeNextStepProps {
  nextStepCompleteHandler: () => void;
  popUpHandler: (v: PopUpTypes) => void;
  isCurrentNextStepFinishedHandler: (b: boolean) => void;
}

export type CallNextStepTypes = (props: { nextStep: NextStepTypes }) => void;
