'use client';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

import GeneticMarketingLayout from '../GeneticMarketingLayout';
import InputModule from './InputModule';
import { usePhoneNumber } from './usePhoneNumber';

const PhoneNumberContainer = () => {
  const { phoneNumber, valueHandler, submitHandler } = usePhoneNumber();

  return (
    <GeneticMarketingLayout>
      <CustomTypography tagType="h2" fontSize="Title_Small" className="text-center">
        برای شروع تست، شماره‌ات رو اینجا وارد کن
      </CustomTypography>

      <InputModule autoFocus value={phoneNumber} valueHandler={valueHandler} isTextTyps={false} />

      {phoneNumber.length === 11 && (
        <div className="w-full mx-auto flex justify-center fixed right-0 bottom-6">
          <CustomButton varient="fill" fontSize="Title_Small" onClick={submitHandler}>
            مرحله بعد
          </CustomButton>
        </div>
      )}
    </GeneticMarketingLayout> 
  );
};

export default PhoneNumberContainer;
