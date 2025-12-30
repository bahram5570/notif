'use client';

import { typographyFontStylesMaker } from './__utils__';
import { toEnglishNumbers, toPersianNumbers } from '@utils/numbers';

import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { UseTypographyMakerTypes } from './types';

const useTypographyMaker = ({ children, numbersMode, fontSize = 'Body_Medium' }: UseTypographyMakerTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const isChildrenTextType = typeof children === 'string' || typeof children === 'number';

  let result = children;
  let typographyFontStyles = {};

  if (isChildrenTextType) {
    const isWeb = !breakPoint.laptop;
    typographyFontStyles = typographyFontStylesMaker({ fontSize, operatingSystem, isWeb });
  }

  if (isChildrenTextType) {
    const ch = numbersMode === 'english' ? toEnglishNumbers(children || '') : toPersianNumbers(children || '');
    result = `${' '}${ch}${' '}`;
  }

  return { typographyFontStyles, result };
};

export default useTypographyMaker;
