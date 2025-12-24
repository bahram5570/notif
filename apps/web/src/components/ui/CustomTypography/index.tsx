'use client';

import { resultMaker, typographyMaker } from './__utils__';

import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { CustomTypographyTypes } from './types';

const CustomTypography = ({ numbersMode, className, children, fontSize, tagType, style }: CustomTypographyTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const result = resultMaker({ children, numbersMode });
  const typographyDetails = typographyMaker({ fontSize, operatingSystem, isWeb: !breakPoint.laptop });

  const Tag = tagType || 'p';

  return (
    <Tag className={`select-none ${className}`} style={{ ...typographyDetails, ...style }}>
      <>{result}</>
    </Tag>
  );
};

export default CustomTypography;
