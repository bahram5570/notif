import { PopUpTypes } from '../__hooks__/usePopUpHandlers/types';

export interface PopUpEditCycleProps {
  popUp: PopUpTypes;
  isPopUpActionCommpleteHandler: () => void;
}

export type EditPageTypes = 'lastPeriod' | 'finishPeriod';
