import { PopUpTimerInteractionTypes } from '../types';

type ItemType = Pick<PopUpTimerInteractionTypes, 'actionCompleteHandler' | 'data'>;
export interface PopUpTimerInteractionContentPropsType extends ItemType {}
