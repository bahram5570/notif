'use client';

import { toEnglishNumbers, toPersianNumbers } from '../../utils/numbers';
import { typographyFontStylesMaker } from '../../utils/system';

import { useSystem } from '../useSystem';
import { UseTypographyMakerTypes } from './types';

export const useTypographyMaker = ({ children, numbersMode, fontSize = 'Body_Medium' }: UseTypographyMakerTypes) => {
  const { operatingSystem, breakPoint } = useSystem();

  const isChildrenTextType = typeof children === 'string' || typeof children === 'number';

  let result = children;
  let typographyFontStyles = {};

  if (isChildrenTextType) {
    typographyFontStyles = typographyFontStylesMaker({ fontSize, operatingSystem, isLargeScreen: !breakPoint.laptop });
  }

  if (isChildrenTextType) {
    const ch = numbersMode === 'english' ? toEnglishNumbers(children || '') : toPersianNumbers(children || '');
    result = `${' '}${ch}${' '}`;
  }

  return { typographyFontStyles, result };
};
