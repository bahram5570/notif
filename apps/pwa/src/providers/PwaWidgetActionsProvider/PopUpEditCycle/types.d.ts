import { PopUpTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface PopUpEditCycleProps {
  popUp: PopUpTypes;
  isPopUpActionCommpleteHandler: () => void;
}

export type EditPageTypes = 'lastPeriod' | 'finishPeriod';
