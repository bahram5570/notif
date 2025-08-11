import { BiorhythmItemsPropsType } from '../type';

type ItemType = Pick<BiorhythmItemsPropsType, 'items'>['items'][0];
export interface BiorhythemItemPropsType extends ItemType {}
