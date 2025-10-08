import { useEffect, useRef } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import useTheme from '@hooks/useTheme';

import { KeyDownHandlerTypes, SingleCodeProps, ValueHandlerTypes } from './types';

const SingleCode = ({ focusInfo, stepIndex, stepValue, stepHandler, deleteHandler, otpStatus }: SingleCodeProps) => {
  const { colors, typography } = useTheme();
  const ref = useRef<HTMLInputElement>(null);

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

  const font = typography.Headline.Small;
  const borderColor = isSelected ? colors.Surface_Outline : colors.Surface_OutlineVariant;

  return (
    <input
      ref={ref}
      type="tel"
      onChange={valueHandler}
      onKeyDown={keyDownHandler}
      style={{ ...font, borderColor }}
      value={toPersianNumbers(stepValue)}
      className={`w-10 h-10 rounded-xl border-[1px] text-center pointer-events-none caret-transparent 
        ${otpStatus === 'wrong' && 'animate-otpError'}
        ${otpStatus === 'correct' && 'animate-otpSuccess'}
      `}
      data-testid={`otp-input-${stepIndex}`}
    />
  );
};

export default SingleCode;
