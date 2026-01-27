import { useRef } from 'react';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toEnglishNumbers, toPersianNumbers } from '@utils/numbers';

import useOperatingSystem from '@hooks/useOperatingSystem';

import { ACTIVATION_INPUT_MODULE_ID } from '../ActivationHeading/constants';
import { ActivationInputModuleProps } from './types';

const ActivationInputModule = (props: ActivationInputModuleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { operatingSystem } = useOperatingSystem();

  const handleFocus = () => {
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.valueHandler(e.target.value);
    handleFocus();
  };

  const updatedValue = props.englishNumbers ? toEnglishNumbers(props.value) : toPersianNumbers(props.value);
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Title_Large', operatingSystem });
  const direction = props.direction || 'ltr';

  return (
    <>
      <input
        ref={inputRef}
        value={updatedValue}
        onFocus={handleFocus}
        onChange={changeHandler}
        data-testid={props.testid}
        placeholder={props.placeHolder}
        id={ACTIVATION_INPUT_MODULE_ID}
        type={props.isTextTyps ? 'text' : 'tel'}
        style={{ ...typographyFontStyles, direction }}
        className={`
                    relative 
                    w-full 
                    pt-1 
                    border-none 
                    bg-transparent 
                    text-center 
                    text-impo_Neutral_OnBackground
                    placeholder-impo_Surface_OutlineVariant
                  `}
      />
    </>
  );
};

export default ActivationInputModule;
