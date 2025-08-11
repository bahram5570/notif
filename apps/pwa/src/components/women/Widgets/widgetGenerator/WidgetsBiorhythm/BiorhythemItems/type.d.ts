import { BiorhythmPropsType } from '../type';

type ItemType = Pick<BiorhythmPropsType, 'data'>;
type DataType = Pick<ItemType, 'data'>['data'];

export interface BiorhythmItemsPropsType extends DataType {}
