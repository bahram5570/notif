import { COLORS_LIST } from '@theme/colors';

import { AlphabetBtnsListTypes } from '../AlphabetBtns/types';

type ColorsTypes = keyof typeof COLORS_LIST;
type ItemsTypes = Pick<AlphabetBtnsListTypes[0], 'list'>['list'];

export type NamesTableProps = {
  list: ItemsTypes;
  bgColor1: ColorsTypes;
  bgColor2: ColorsTypes;
  borderColor: ColorsTypes;
  titleBgColor: ColorsTypes;
};
