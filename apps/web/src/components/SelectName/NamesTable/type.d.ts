import { AlphabetBtnsListTypes } from '../AlphabetBtns/types';

type ItemsTypes = Pick<AlphabetBtnsListTypes[0], 'list'>['list'];

export type NamesTableProps = {
  list: ItemsTypes;
  bgColor1: string;
  bgColor2: string;
  titleColor: string;
  borderColor: string;
  titleBgColor: string;
};
