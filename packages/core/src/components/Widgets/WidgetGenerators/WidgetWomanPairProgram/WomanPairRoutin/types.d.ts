import { WomanPairProgramCardPropsPropsType } from '../types';

type PairRoutinItemType = Pick<WomanPairProgramCardPropsPropsType, 'data'>['data']['items'][0];
type ItemType = Pick<WomanPairProgramCardPropsPropsType, 'isMan'>;
export interface WomanPairRoutinPropsType extends PairRoutinItemType, ItemType {}
