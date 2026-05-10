import { WomanPairProgramCardPropsPropsType } from '../types';

type PairRoutinItemType = Pick<WomanPairProgramCardPropsPropsType, 'data'>['data']['items'][0];
export interface WomanPairRoutinPropsType extends PairRoutinItemType {}
