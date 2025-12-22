import { useRef } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import styles from './styles.module.css';

import { InputModuleProps } from './types';

const InputModule = ({ placeHolder, value, valueHandler, isTextTyps, autoFocus }: InputModuleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
      style={{ direction: isTextTyps ? 'rtl' : 'ltr' }}
      autoFocus={autoFocus}
      className={`!w-[385px] h-[48px] p-4 border !border-[#D0D0D0] rounded-full text-center focus:outline-0 caret-impo_Primary_Primary text-impo_Neutral_OnBackground ${styles.input}`}
    />
  );
};

export default InputModule;
