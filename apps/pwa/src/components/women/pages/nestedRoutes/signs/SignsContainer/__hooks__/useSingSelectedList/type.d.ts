import { InfoListTypes } from '../../../__hooks__/useGetData/types';
import { SignsContainerProps } from '../../types';

export type SingSelectedItem = { category: number; sign: number };

export type SingSelectedListType = SingSelectedItem[];

export type UpdateSingSelectedListType = (sign: SingSelectedItem) => void;

type ItemType = Pick<SignsContainerProps, 'infoList'>['infoList'][0];

export interface UseSingSelectedListPropsType {
  info: ItemType;
}
