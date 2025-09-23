'use client';

import collaborationlogo from '@assets/images/geneticMarketing/collaborationlogo.webp';

import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
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

      <div className="w-full mx-auto grid gap-y-6 justify-items-center justify-center fixed right-0 bottom-6">
        {phoneNumber.length === 11 && (
          <CustomButton varient="fill" fontSize="Title_Small" onClick={submitHandler}>
            مرحله بعد
          </CustomButton>
        )}
        <CustomImage src={collaborationlogo} alt="collaborationlogo" width={999} height={999} className="w-[112px]" />
      </div>
    </GeneticMarketingLayout>
  );
};

export default PhoneNumberContainer;
