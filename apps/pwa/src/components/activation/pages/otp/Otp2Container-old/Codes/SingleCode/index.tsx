import { useEffect, useRef } from 'react';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';

import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import { KeyDownHandlerTypes, SingleCodeProps, ValueHandlerTypes } from './types';

const SingleCode = ({ focusInfo, stepIndex, stepValue, stepHandler, deleteHandler, otpStatus }: SingleCodeProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const { operatingSystem } = useOperatingSystem();

  const isSelected = focusInfo.index === stepIndex;

  useEffect(() => {
    const el = ref.current;

    if (el) {
      if (isSelected) {
        el.focus();

        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }
  }, [focusInfo, stepIndex, ref]);

  const valueHandler: ValueHandlerTypes = (e) => {
    const isLastInput = stepIndex === 5;
    const value = e.target.value;
    stepHandler(value);

    if (isLastInput && value.length > 0) {
      setTimeout(() => {
        ref.current?.blur();
      }, 100);
    }
  };

  const keyDownHandler: KeyDownHandlerTypes = (e) => {
    const { key } = e;

    if (key === 'Backspace' || key === 'Delete') {
      deleteHandler();
    }
  };

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Headline_Small', operatingSystem });

  return (
    <input
      ref={ref}
      type="tel"
      onChange={valueHandler}
      onKeyDown={keyDownHandler}
      style={{ ...typographyFontStyles }}
      value={toPersianNumbers(stepValue)}
      data-testid={`otp-input-${stepIndex}`}
      className={`
                  w-10 
                  h-10 
                  text-center 
                  pointer-events-none 
                  caret-transparent 
                  bg-impo_Transparent
                  text-impo_Neutral_OnBackground
                  border-[1px] 
                  rounded-xl 
                  ${isSelected ? 'border-impo_Surface_Outline' : 'border-impo_Surface_OutlineVariant'}
                  ${otpStatus === 'wrong' && 'animate-otpError'}
                  ${otpStatus === 'correct' && 'animate-otpSuccess'}
                `}
    />
  );
};

export default SingleCode;
