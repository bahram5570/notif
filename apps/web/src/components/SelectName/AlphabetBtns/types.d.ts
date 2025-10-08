import { ReactElement } from 'react';

import { COLORS_LIST } from '@theme/colors';

export type AlphabetBtnsListTypes = {
  [x in string]: {
    category: string;
    labelTitle: string;
    list: {
      title: string;
      rootName: string;
      description: string;
    }[];
  };
};

type ColorsTypes = keyof typeof COLORS_LIST;

export interface AlphabetBtnsTypes {
  title: string;
  description: ReactElement | string;
  list: AlphabetBtnsListTypes;
  textColor: ColorsTypes;
  bgColor1: ColorsTypes;
  bgColor2: ColorsTypes;
}
