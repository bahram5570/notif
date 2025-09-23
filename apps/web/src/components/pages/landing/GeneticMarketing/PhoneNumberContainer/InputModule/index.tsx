import { useRef } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import styles from './styles.module.css';

import { COLORS_LIST } from '@theme/colors';

import { InputModuleProps } from './types';

const InputModule = ({ placeHolder, value, valueHandler, isTextTyps, autoFocus }: InputModuleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const caretColor = COLORS_LIST.Primary_Primary;
  const textColor = COLORS_LIST.Neutral_OnBackground;

  const handleFocus = () => {
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    valueHandler(e.target.value);
    handleFocus();
  };

  return (
    <input
      ref={inputRef}
      placeholder={placeHolder}
      value={toPersianNumbers(value)}
      type={isTextTyps ? 'text' : 'tel'}
      onChange={(e) => changeHandler(e)}
      style={{ color: textColor, caretColor, direction: isTextTyps ? 'rtl' : 'ltr' }}
      autoFocus={autoFocus}
      className={`border-none bg-transparent w-full relative pt-7 text-center placeholder-[#c7c7c7] focus:outline-0 ${styles.input}`}
    />
  );
};

export default InputModule;
