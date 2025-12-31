'use client';

import useTypographyMaker from '@hooks/useTypographyMaker';

import { CustomTypographyTypes } from './types';

const CustomTypography = ({ numbersMode, className, children, fontSize, tagType, style }: CustomTypographyTypes) => {
  const { typographyFontStyles, result } = useTypographyMaker({ children, fontSize, numbersMode });

  const Tag = tagType || 'p';

  return (
    <Tag className={`select-none ${className}`} style={{ ...typographyFontStyles, ...style }}>
      {result}
    </Tag>
  );
};

export default CustomTypography;
