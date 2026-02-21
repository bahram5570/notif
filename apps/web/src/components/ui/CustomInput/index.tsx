'use client';

import { resultMaker } from './__utils__';
import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import { useSystem } from '@repo/core/hooks/useSystem';

import { CustomInputTypes } from './types';

const CustomInput = ({
  fontSize = 'Body_Medium',
  hasOutline = false,
  placeholder = '',
  numbersMode,
  className,
  onValue,
  style,
  value,
  maxLength,
}: CustomInputTypes) => {
  const { breakPoint, operatingSystem } = useSystem();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = resultMaker(e.target.value, numbersMode);
    onValue(result);
  };

  const updatedValue = resultMaker(value, numbersMode);
  const typographyDetails = typographyFontStylesMaker({ fontSize, operatingSystem, isWeb: !breakPoint.laptop });

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
