'use client';

import ImpoIcon from '@assets/icons/impoName.svg';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

import { SensitiveQuestionFooterPropsType } from './type';

const SensitiveQuestionFooter = ({ nextStepHandler, isDisable }: SensitiveQuestionFooterPropsType) => {
  const { breakPoint } = useSystem();
  return (
    <div
      className={`fixed lg:absolute ${breakPoint.laptop && 'absolute'} bottom-0 left-0 right-0 lg:justify-center justify-end items-center lg:w-full lg:max-w-full max-w-[514px]  h-[173px] w-full mx-auto flex flex-col gap-4`}
      style={{ background: ' linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 40.96%)' }}
    >
      <div className="w-fit mx-auto  flex">
        <CustomButton onClick={nextStepHandler} isDisable={isDisable} className="w-fit  !h-12 !px-12">
          مرحله بعدی
        </CustomButton>
      </div>
      <div className="flex items-center justify-center">
        <CustomTypography fontSize="Body_Small" className="text-impo_black">
          تهیه و تایید علمی توسط متخصصین اپلیکیشن
        </CustomTypography>
        <ImpoIcon className="w-8 h-auto fill-impo_Pink_500" />
      </div>
    </div>
  );
};

export default SensitiveQuestionFooter;
