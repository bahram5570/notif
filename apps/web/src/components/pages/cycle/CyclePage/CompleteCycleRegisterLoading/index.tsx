import { useState } from 'react';

import { externalLink } from '@utils/navigation';

import ProgressCycleLoading from '@components/ProgressCycleLoading';
import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';
import { useRouter } from 'next/navigation';

import { CompleteCycleRegisterLoadingTypes } from './types';

const CompleteCycleRegisterLoading = ({ redirectLink }: CompleteCycleRegisterLoadingTypes) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const redirectHandler = () => {
    if (redirectLink) {
      externalLink(redirectLink, true);

      setTimeout(() => {
        router.push('/');
      }, 100);
    }
  };

  const transform = `translateY(${isLoaded ? 0 : 200}px)`;

  return (
    <div className="w-full h-[calc(100dvh_-80px_-56px)] mt-[56px] pt-[12vh] flex flex-col items-center bg-impo_White">
      <div className="w-full flex flex-col items-center gap-3 pb-[10vh]">
        <CustomTypography fontSize="Title_Large" className="w-fit px-7 text-center">
          به ایمپو خوش اومدی
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="w-fit px-7 text-center">
          درحال تنظیم کردن ایمپو مطابق اطلاعاتی که وارد کردی هستیم.
        </CustomTypography>
      </div>

      <ProgressCycleLoading onComplete={() => setIsLoaded(true)} />

      <div className="w-full flex justify-center pb-[20px] mt-auto duration-300" style={{ transform }}>
        <CustomButton
          fontSize="Title_Small"
          onClick={redirectHandler}
          className="!h-12 !w-[230px]"
          id="acticationCr_complete_register"
        >
          ورود به ایمپو
        </CustomButton>
      </div>
    </div>
  );
};

export default CompleteCycleRegisterLoading;
