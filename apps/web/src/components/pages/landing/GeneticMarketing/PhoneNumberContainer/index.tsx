'use client';

import collaborationlogo from '@assets/images/geneticMarketing/collaborationlogo.webp';

import CustomButton2 from '@components/ui/CustomButton2';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import GeneticMarketingLayout from '../GeneticMarketingLayout';
import InputModule from './InputModule';
import { usePhoneNumber } from './usePhoneNumber';

const PhoneNumberContainer = () => {
  const { phoneNumber, valueHandler, submitHandler, isLoading } = usePhoneNumber();

  return (
    <GeneticMarketingLayout>
      <div className="overflow-hidden w-full">
        <CustomTypography tagType="h2" fontSize="Title_Small" className="text-center !text-impo_Neutral_OnBackground">
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
          className={`w-full mx-auto grid gap-y-6  justify-items-center justify-center mt-5 duration-200 ${phoneNumber.length > 0 ? `translate-y-0 ` : `translate-y-[100dvh]`}`}
        >
          <CustomButton2
            fontSize="Lable_Large"
            className="!bg-impo_Primary_Primary !border-none"
            onClick={submitHandler}
            isLoading={isLoading}
          >
            <CustomTypography fontSize="Lable_Large" className="!text-impo_Primary_OnPrimary">
              مرحله بعد
            </CustomTypography>
          </CustomButton2>
        </div>
        <div className="w-full absolute bottom-4 left-0 flex justify-items-center justify-center">
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
