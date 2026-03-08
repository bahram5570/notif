'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import SubscriptionMenCards from './SubscriptionMenCards';
import SubscriptionMenPaymentInfo from './SubscriptionMenPaymentInfo';
import SubscriptionMenTaxInfo from './SubscriptionMenTaxInfo';
import useCurrentPackage from './__hooks__/useCurrentPackage';
import useGetData from './__hooks__/useGetData';

const SubscriptionPage = () => {
  const { isLoadingPage, data } = useGetData();

  const { currentPackage, currentPackageHandler } = useCurrentPackage(data?.packages?.[0]);

  console.log(data);

  return (
    <MainPageLayout rightElement="BackButton" paddingTop={0} headerClassName="bg-impo_Transparent !backdrop-blur-none">
      <>
        {isLoadingPage && !data && <CustomSpinner className="mx-auto mt-40" />}

        {!isLoadingPage && data && currentPackage && (
          <div className="relative w-full h-[100dvh]">
            <div className="absolute top-0 left-0 right-0 w-full h-[210px] bg-[url('/assets/images/subscriptionHeading.webp')] bg-cover bg-bottom z-10" />

            <div className="relative w-full h-full max-h-[140px] pb-4 flex flex-col items-center justify-end gap-1 z-20">
              <CustomTypography fontSize="Title_Small" className="text-impo_White">
                عاشقانه ترین ها رو با ایمپو تجربه کن!
              </CustomTypography>

              <CustomTypography fontSize="Body_Small" className="text-impo_White">
                با اشتراک ایمپو می تونی از همه امکانات اپلیکیشن استفاده کنی
              </CustomTypography>
            </div>

            <div className="relative w-full h-full max-h-[calc(100dvh-200px)] px-4 pb-5 overflow-y-scroll z-10">
              <SubscriptionMenCards
                packages={data.packages}
                currentPackage={currentPackage}
                currentPackageHandler={currentPackageHandler}
              />

              <SubscriptionMenTaxInfo />

              <SubscriptionMenPaymentInfo {...currentPackage} />
            </div>
          </div>
        )}
      </>
    </MainPageLayout>
  );
};

export default SubscriptionPage;
