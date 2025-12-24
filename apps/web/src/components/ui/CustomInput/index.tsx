'use client';

import { typographyMaker } from '../CustomTypography/__utils__';
import { resultMaker } from './__utils__';

import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { CustomInputTypes } from './types';

const CustomInput = ({
  hasOutline = false,
  placeholder = '',
  numbersMode,
  className,
  fontSize,
  onValue,
  style,
  value,
  maxLength,
}: CustomInputTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = resultMaker(e.target.value, numbersMode);
    onValue(result);
  };

  const updatedValue = resultMaker(value, numbersMode);
  const typographyDetails = typographyMaker({ fontSize, operatingSystem, isWeb: !breakPoint.laptop });

  return (
    <input
      type="text"
      value={updatedValue}
      maxLength={maxLength}
      onChange={changeHandler}
      placeholder={placeholder}
      style={{ ...typographyDetails, ...style }}
      className={`w-full sm:h-full h-12 text-impo_Neutral_OnBackground bg-impo_Neutral_Background ${!hasOutline && 'outline-none'} ${className}`}
    />
  );
};

export default CustomInput;
