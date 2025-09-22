import { CSSProperties, useMemo, useRef } from 'react';

import { toEnglishNumbers, toPersianNumbers } from '@utils/numbers';

import styles from './styles.module.css';

import useTheme from '@hooks/useTheme';

import { ACTIVATION_INPUT_MODULE_ID } from '../ActivationHeading/constants';
import { ActivationInputModuleProps } from './types';

const ActivationInputModule = (props: ActivationInputModuleProps) => {
  const { typography, colors } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.valueHandler(e.target.value);
    handleFocus();
  };

  const style = useMemo(() => {
    const result: CSSProperties = {
      direction: props.isTextTyps ? 'rtl' : 'ltr',
      caretColor: colors.PrimaryWoman_Primary,
      color: colors.Neutral_OnBackground,
      ...typography.Title.Large,
    };

    return result;
  }, []);

  const updatedValue = props.englishNumbers ? toEnglishNumbers(props.value) : toPersianNumbers(props.value);

  return (
    <>
      <input
        style={style}
        ref={inputRef}
        value={updatedValue}
        onFocus={handleFocus}
        onChange={changeHandler}
        placeholder={props.placeHolder}
        id={ACTIVATION_INPUT_MODULE_ID}
        type={props.isTextTyps ? 'text' : 'tel'}
        className={`border-none bg-transparent w-full relative pt-1 text-center placeholder-[#EFEFEF] ${styles.input}`}
      />
    </>
  );
};

export default ActivationInputModule;
