import { useRef } from 'react';

import { toEnglishNumbers, toPersianNumbers } from '@repo/core/utils/numbers';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

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
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });
  const direction = props.direction || 'ltr';

  return (
    <>
      <input
        ref={inputRef}
        value={updatedValue}
        onFocus={handleFocus}
        onChange={changeHandler}
        placeholder={props.placeHolder}
        id={ACTIVATION_INPUT_MODULE_ID}
        type={props.isTextTyps ? 'text' : 'tel'}
        style={{ ...typographyFontStyles, direction }}
        className={`
                    relative 
                    w-[calc(100%-32px)] 
                    p-2 
                    border-[1px]
                    border-impo_Neutral_Surface
                    rounded-full
                    bg-transparent 
                    text-center 
                    text-impo_Neutral_OnBackground
                    placeholder-impo_Surface_OutlineVariant
                    ${props.className}
                  `}
      />
    </>
  );
};

export default ActivationInputModule;
