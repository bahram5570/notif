import { toPersianNumbers } from '@utils/numbers';

import styles from './styles.module.css';

import { COLORS_LIST } from '@theme/colors';

import { InputModuleProps } from './types';

const InputModule = ({ placeHolder, value, valueHandler, isTextTyps, autoFocus }: InputModuleProps) => {
  const caretColor = COLORS_LIST.Primary_Primary;
  const textColor = COLORS_LIST.Neutral_OnBackground;

  return (
    <input
      placeholder={placeHolder}
      value={toPersianNumbers(value)}
      type={isTextTyps ? 'text' : 'tel'}
      onChange={(e) => valueHandler(e.target.value)}
      style={{ color: textColor, caretColor, direction: isTextTyps ? 'rtl' : 'ltr' }}
      autoFocus={autoFocus}
      className={`border-none bg-transparent w-full relative pt-7 text-center placeholder-[#c7c7c7] focus:outline-0 ${styles.input}`}
    />
  );
};

export default InputModule;
