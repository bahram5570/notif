'use client';

import { useState } from 'react';

import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import { LottieCanvas } from '@lib/LottieCanvas';

import ApprovedCodeToast from './ApprovedCodeToast';
import DiscountLoading from './DiscontLoading';
import DiscountCode from './DiscountCode';
import Heading from './Heading';
import SubmitBtn from './SubmitBtn';
import SubscriptionPackages from './SubscriptionPackages';
import SubscriptionSkeleton from './SubscriptionSkeleton';
import useGetData from './__hooks__/useGetData';
import useShowAll from './__hooks__/useShowAll';
import { SUBSCRIPTION_SUBMIT_BUTTON_HEIGHT } from './constants';

const SubscriptionPage = () => {
  const { showAll, showAllHandler } = useShowAll();
  const [approvedCode, setApprovedCode] = useState('');
  const [resetKey, setResetKey] = useState(0);
  const { loadingPage, loadingResponse, callApi, data, currentPackage, currentPackageHandler } = useGetData();

  const handleReset = () => setResetKey((prev) => prev + 1);

  const mediasData = data && data.medias.length > 0;
  const morePackagesData = data && data.morePackages.length > 0;

  return (
    <MainPageLayout
      className="relative"
      leftElement1="Profile"
      paddingTop={HEADER_HEIGHT}
      rightElement={data?.hasSubscribtion ? 'BackButton' : undefined}
    >
      {loadingPage && !data && <SubscriptionSkeleton />}

      {!loadingPage && data && (
        <>
          {loadingResponse && <DiscountLoading />}

          <div className="relative" style={{ paddingBottom: SUBSCRIPTION_SUBMIT_BUTTON_HEIGHT + 100, paddingTop: 25 }}>
            <div className="flex flex-col items-center px-4 gap-5">
              {mediasData && (
                <div className="min-h-56 w-full h-full">
                  <LottieCanvas src={data.medias[0]} autoplay={true} style={{ width: '100%', height: '100%' }} />
                </div>
              )}

              <Heading title={data.title} description={data.description} />

              {data.discount.valid && !loadingResponse && (
                <ApprovedCodeToast
                  callApi={callApi}
                  onRestHandler={handleReset}
                  discountCodeHelper={data.discount.text}
                />
              )}

              <SubscriptionPackages
                packages={data.packages}
                visibleCount={data.visibleCount}
                currentPackage={currentPackage}
                currentPackageHandler={currentPackageHandler}
              />

              <div key={resetKey} className="w-full">
                <DiscountCode
                  onApply={callApi}
                  loadingResponse={loadingResponse}
                  discountCodeHelper={data.discount.text}
                  isValidDiscountCode={data.discount.valid}
                  approvedCodeHandler={(v) => setApprovedCode(v)}
                />
              </div>

              {morePackagesData && !showAll && (
                <div className="w-full flex items-center gap-2 py-4 " id="SubscriptionLoadMore">
                  <div className="w-full h-[1px] block bg-impo_Neutral_Surface" />
                  <div
                    className="px-4 py-2 min-w-fit rounded-full bg-impo_Primary_PrimaryContainer"
                    onClick={showAllHandler}
                  >
                    <CustomTypography fontSize="Lable_Medium" className="text-impo_Primary_Primary">
                      از اینجا پیشنهادهای بیشتر رو ببین
                    </CustomTypography>
                  </div>

                  <div className="w-full h-[1px] block bg-impo_Neutral_Surface" />
                </div>
              )}

              {showAll && (
                <SubscriptionPackages
                  packages={data.morePackages}
                  visibleCount={data.visibleCount}
                  currentPackage={currentPackage}
                  currentPackageHandler={currentPackageHandler}
                />
              )}

              <a href={`tel:${data.supportPhone}`}>
                <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
                  {data.supportText}
                </CustomTypography>
              </a>
              {mediasData && (
                <>
                  <CustomImage src={data.medias[1]} className="pb-10" />
                  <CustomImage src={data.medias[2]} />
                </>
              )}

              <SubmitBtn
                approvedCode={approvedCode}
                packageId={currentPackage.id}
                isFree={currentPackage.isFree}
                value={currentPackage.value}
                payButtonText={currentPackage.payBtnText}
                totalText={currentPackage.totalText}
                totalAmount={currentPackage.totalAmount}
                totalUnit={currentPackage.totalUnit}
              />
            </div>
          </div>
        </>
      )}
    </MainPageLayout>
  );
};

export default SubscriptionPage;
