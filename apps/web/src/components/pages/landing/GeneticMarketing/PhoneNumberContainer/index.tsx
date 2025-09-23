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
      <div className="overflow-hidden w-full">
        <CustomTypography tagType="h2" fontSize="Title_Small" className="text-center">
          برای شروع تست، شماره‌ات رو اینجا وارد کن
        </CustomTypography>

        <InputModule
          autoFocus
          value={phoneNumber}
          placeHolder="اینجابنویس"
          valueHandler={valueHandler}
          isTextTyps={false}
        />

        <div
          className={`w-full mx-auto grid gap-y-6 justify-items-center justify-center mt-5 duration-200 ${phoneNumber.length > 0 ? `translate-y-0 ` : `translate-y-[100dvh]`}`}
        >
          <CustomButton varient="fill" fontSize="Lable_Large" onClick={submitHandler}>
            مرحله بعد
          </CustomButton>
        </div>
        <div className="w-full absolute bottom-8 left-0 flex justify-items-center justify-center">
          <CustomImage
            src={collaborationlogo}
            alt="collaborationlogo"
            width={999}
            height={999}
            className="w-[112px] "
          />
        </div>
      </div>
    </GeneticMarketingLayout>
  );
};

export default PhoneNumberContainer;
