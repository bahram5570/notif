import { useState } from 'react';

import { toEnglishNumbers } from '@repo/core/utils/numbers';

import ActivationInputModule from '@components/activation/ActivationInputModule';
import useActivationIsLargeScreen from '@hooks/__activation__/useActivationIsLargeScreen';

import useValidation from '../../otp/Otp1Container/__hooks__/useValidation';
import PartnerCodeInputContinueBtn from './PartnerCodeInputContinueBtn';
import PartnerCodeInputHeading from './PartnerCodeInputHeading';
import { PartnerCodeInputProps } from './types';

const PartnerCodeInput = ({ question, onSubmit, isLoading }: PartnerCodeInputProps) => {
  const [code, setCode] = useState('');
  const { isLargeScreen } = useActivationIsLargeScreen();

  const { invalidMessage } = useValidation({ isPhone: true, value: code });

  const valueHandler = (v: string) => {
    if (v.length > 11) {
      return;
    }

    setCode(v);
  };

  const submitHandler = () => {
    onSubmit({ code: toEnglishNumbers(code) });
  };

  const showContinueBtn = code.trim().length > 0;

  return (
    <div className="relative overflow-x-hidden min-h-[100dvh] animate-mainActivationModule">
      <PartnerCodeInputHeading
        title={question.title}
        isLargeScreen={isLargeScreen}
        description={question.description}
      />

      <div style={{ width: '100%', paddingTop: isLargeScreen ? '100px' : '140px' }}>
        <ActivationInputModule valueHandler={valueHandler} placeHolder="اینجا بنویس" value={code} isTextTyps={false} />
      </div>

      <PartnerCodeInputContinueBtn
        isLoading={isLoading}
        onSubmit={submitHandler}
        invalidMessage={invalidMessage}
        showContinueBtn={showContinueBtn}
      />
    </div>
  );
};

export default PartnerCodeInput;
