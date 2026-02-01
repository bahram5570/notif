'use client';

import NotFoundIcon from '@assets/icons/404.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import MainFooterContainer from '@components/MainFooter/MainFooterContainer';
import MainPageLayout from '@components/MainPageLayout';
import { LottieCanvas } from '@lib/LottieCanvas';

const NotFoundPage = () => {
  return (
    <MainPageLayout rightElement="BackButton">
      <div className="relative w-full flex flex-col items-center h-full px-4 pt-[360px] sm:pt-[460px] pb-[80px]">
        <div className="absolute top-0 sm:top-10 left-0 right-0 flex justify-center z-0">
          <LottieCanvas
            loop={true}
            width="100%"
            autoplay={true}
            className="w-[360px]"
            src="/assets/lottie/notFound.lottie"
          />
        </div>

        <div className="relative flex flex-col items-center gap-2 z-10">
          <NotFoundIcon className="w-[200px] sm:w-[250px]" />

          <CustomTypography fontSize="Headline_Medium" className="text-impo_Neutral_OnBackground">
            به نظر می‌رسه گم شدی
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            صفحه ای که به دنبالش هستی در دسترس نیست
          </CustomTypography>
        </div>
      </div>
      <MainFooterContainer pathName={''} />
    </MainPageLayout>
  );
};

export default NotFoundPage;
