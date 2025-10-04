'use client';

import { useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';
import { LottieCanvas } from '@lib/LottieCanvas';

import ApprovedCodeToast from './ApprovedCodeToast';
import DiscountLoading from './DiscontLoading';
import DiscountCode from './DiscountCode';
import Heading from './Heading';
import SubmitBtn from './SubmitBtn';
import SubscriptionPackages from './SubscriptionPackages';
import SubscriptionSkeleton from './SubscriptionSkeleton';
import useGetData from './__hooks__/useGetData';
import useSelectedPackageIndex from './__hooks__/useSelectedPackage';
import useShowAll from './__hooks__/useShowAll';
import { SUBSCRIPTION_SUBMIT_BUTTON_HEIGHT } from './constants';

const SubscriptionPage = () => {
  const { showAll, showAllHandler } = useShowAll();
  const [approvedCode, setApprovedCode] = useState('');
  const [resetKey, setResetKey] = useState(0);
  const { loadingPage, loadingResponse, callApi, data } = useGetData();
  const { selectedPackageIndex, selectedPackageIndexHandler } = useSelectedPackageIndex();
  const { colors } = useTheme();
  const handleReset = () => setResetKey((prev) => prev + 1);

  const mediasData = data && data.medias.length > 0;
  const morePackagesData = data && data.morePackages.length > 0;

  return (
    <WomenPageLayout
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
                  <LottieCanvas src={data?.medias[0]} autoplay={true} style={{ width: '100%', height: '100%' }} />
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
                selectedPackageIndex={selectedPackageIndex}
                selectedPackageIndexHandler={selectedPackageIndexHandler}
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
                <div className="w-full flex items-center gap-2 p-4 " onClick={showAllHandler} id="SubscriptionLoadMore">
                  <div className="w-full h-[1px] block" style={{ backgroundColor: colors.Neutral_Surface }} />

                  <Typography scale="Lable" size="Medium" className="min-w-fit">
                    مشاهده بیشتر پلن ها
                  </Typography>

                  <div className="w-full h-[1px] block" style={{ backgroundColor: colors.Neutral_Surface }} />
                </div>
              )}

              {showAll && (
                <SubscriptionPackages
                  packages={data.morePackages}
                  visibleCount={data.visibleCount}
                  selectedPackageIndex={selectedPackageIndex}
                  selectedPackageIndexHandler={selectedPackageIndexHandler}
                />
              )}

              <a href={`tel:${data.supportPhone}`}>
                <Typography scale="Body" size="Medium" textAlign="center">
                  {data.supportText}
                </Typography>
              </a>
              {mediasData && (
                <>
                  <CustomImage src={data.medias[1]} className="pb-10" />
                  <CustomImage src={data.medias[2]} />
                </>
              )}

              <SubmitBtn
                approvedCode={approvedCode}
                packageId={data.packages[selectedPackageIndex].id}
                isFree={data.packages[selectedPackageIndex].isFree}
                value={data.packages[selectedPackageIndex].value}
                payButtonText={data.packages[selectedPackageIndex].payBtnText}
                totalText={data.packages[selectedPackageIndex].totalText}
                totalAmount={data.packages[selectedPackageIndex].totalAmount}
                totalUnit={data.packages[selectedPackageIndex].totalUnit}
              />
            </div>
          </div>
        </>
      )}
    </WomenPageLayout>
  );
};

export default SubscriptionPage;
