import { ReactElement } from 'react';

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

export interface AlphabetBtnsTypes {
  title: string;
  description: ReactElement | string;
  list: AlphabetBtnsListTypes;
  textColor: string;
  bgColor1: string;
  bgColor2: string;
}
