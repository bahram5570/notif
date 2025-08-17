import { useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
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

const SubscriptionContainer = () => {
  const { showAll, showAllHandler } = useShowAll();
  const [approvedCode, setApprovedCode] = useState('');
  const [requestKey, setRequestKey] = useState('initial');
  const { loadingPage, loadingResponse, callApi, data } = useGetData();
  const { selectedPackageIndex, selectedPackageIndexHandler } = useSelectedPackageIndex();

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

          <div className="relative" style={{ paddingBottom: SUBSCRIPTION_SUBMIT_BUTTON_HEIGHT + 100 }}>
            <div className="flex flex-col items-center px-4 gap-5">
              <div className="min-h-56 w-full h-full">
                <LottieCanvas src={data?.medias[0]} autoplay={true} style={{ width: '100%', height: '100%' }} />
              </div>
              <Heading title={data.title} description={data.description} />

              {data.isValidDiscountCode && !loadingResponse && (
                <ApprovedCodeToast
                  callApi={callApi}
                  onRestHandler={setRequestKey}
                  discountCodeHelper={data.discountCodeHelper}
                />
              )}

              <SubscriptionPackages
                showAll={showAll}
                packages={data.packages}
                visibleCount={data.visibleCount}
                showAllHandler={showAllHandler}
                selectedPackageIndex={selectedPackageIndex}
                selectedPackageIndexHandler={selectedPackageIndexHandler}
              />

              <div key={requestKey} className="w-full">
                <DiscountCode
                  onApply={callApi}
                  loadingResponse={loadingResponse}
                  discountCodeHelper={data.discountCodeHelper}
                  isValidDiscountCode={data.isValidDiscountCode}
                  approvedCodeHandler={(v) => setApprovedCode(v)}
                />
              </div>

              <a href={`tel:${data.supportPhone}`}>
                <Typography scale="Body" size="Medium" textAlign="center">
                  {data.supportText}
                </Typography>
              </a>

              <CustomImage src={data.medias[1]} className="pb-10" />
              <CustomImage src={data.medias[2]} />
              <SubmitBtn
                approvedCode={approvedCode}
                packageId={data.packages[selectedPackageIndex].id}
                isFree={data.packages[selectedPackageIndex].isFree}
                value={data.packages[selectedPackageIndex].totalPay}
                payButtonText={data.packages[selectedPackageIndex].payButtonText}
              />
            </div>
          </div>
        </>
      )}
    </WomenPageLayout>
  );
};

export default SubscriptionContainer;
