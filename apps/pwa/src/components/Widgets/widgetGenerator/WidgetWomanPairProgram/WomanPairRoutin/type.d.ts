import { WomanPairProgramCardPropsPropsType } from '../type';

type PairRoutinItemType = Pick<WomanPairProgramCardPropsPropsType, 'data'>['data']['items'][0];

export interface WomanPairRoutinPropsType extends PairRoutinItemType {}
