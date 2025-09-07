'use client';

import NotFoundIcon from '@assets/icons/404.svg';

import Typography from '@components/ui/Typography';
import WomenFooterContainer from '@components/women/WomenFooter/WomenFooterContainer';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { LottieCanvas } from '@lib/LottieCanvas';

const NotFoundPage = () => {
  return (
    <WomenPageLayout rightElement="BackButton">
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

          <Typography size="Medium" scale="Headline">
            به نظر می‌رسه گم شدی
          </Typography>

          <Typography scale="Body" size="Medium">
            صفحه ای که به دنبالش هستی در دسترس نیست
          </Typography>
        </div>
      </div>
      <WomenFooterContainer pathName={''} />
    </WomenPageLayout>
  );
};

export default NotFoundPage;
