import { useRef } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import styles from './styles.module.css';

import { InputModuleProps } from './types';

const InputModule = ({ placeHolder, value, valueHandler, isTextTyps, autoFocus }: InputModuleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const caretColor = '!text-impo_Primary_Primary';

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
      style={{ caretColor, direction: isTextTyps ? 'rtl' : 'ltr' }}
      autoFocus={autoFocus}
      className={`border-none bg-transparent w-full relative pt-7 text-center placeholder-[#c7c7c7] focus:outline-0 !text-impo_Neutral_OnBackground ${styles.input}`}
    />
  );
};

export default InputModule;
