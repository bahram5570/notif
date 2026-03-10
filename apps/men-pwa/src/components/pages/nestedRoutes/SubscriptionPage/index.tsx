'use client';

import { useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import SubscriptionMenCards from './SubscriptionMenCards';
import SubscriptionMenDiscount from './SubscriptionMenDiscount';
import SubscriptionMenPaymentInfo from './SubscriptionMenPaymentInfo';
import SubscriptionMenSupport from './SubscriptionMenSupport';
import SubscriptionMenTaxInfo from './SubscriptionMenTaxInfo';
import useCurrentPackage from './__hooks__/useCurrentPackage';
import useGetData from './__hooks__/useGetData';
import useSubmitSubscription from './__hooks__/useSubmitSubscription';

const SubscriptionPage = () => {
  const [approvedCode, setApprovedCode] = useState('');
  const { isSubscriptionLoading, submitHandler } = useSubmitSubscription();
  const { isLoadingPage, data, isDiscountLoading, callApiDiscount } = useGetData();

  const { currentPackage, currentPackageIdHandler, currentPackageId } = useCurrentPackage(data?.packages);

  const payHandler = () => {
    if (currentPackage) {
      submitHandler(currentPackage.isFree, {
        isWeb: true,
        discount: approvedCode,
        value: currentPackage.value,
        packageId: currentPackage.id,
      });
    }
  };

  return (
    <MainPageLayout rightElement="BackButton" paddingTop={0} headerClassName="bg-impo_Transparent !backdrop-blur-none">
      <>
        {isLoadingPage && !data && <CustomSpinner className="mx-auto mt-40" />}

        {!isLoadingPage && data && currentPackage && currentPackageId && (
          <div className="relative w-full h-[100dvh]">
            <div
              className="
                          absolute 
                          top-0 
                          left-0 
                          right-0 
                          w-full 
                          h-[210px] 
                          bg-[url('/assets/images/subscriptionHeading.webp')] 
                          bg-cover 
                          bg-bottom 
                          z-10
                        "
            />

            <div className="relative w-full h-full max-h-[140px] pb-4 flex flex-col items-center justify-end gap-1 z-20">
              <CustomTypography fontSize="Title_Small" className="text-impo_White">
                برای مراقبت از خودت و رابطه‌ت
              </CustomTypography>

              <CustomTypography fontSize="Body_Small" className="text-impo_White">
                و استفاده از همه امکانات ایمپو، یکی از طرح‌های زیر را انتخاب کن
              </CustomTypography>
            </div>

            <div className="relative w-full h-full max-h-[calc(100dvh-140px)] px-4 pb-6 overflow-y-scroll z-10">
              <SubscriptionMenCards
                packages={data.packages}
                currentPackageId={currentPackageId}
                currentPackageHandler={currentPackageIdHandler}
              />

              <SubscriptionMenTaxInfo />

              <SubscriptionMenDiscount
                onApply={callApiDiscount}
                loadingResponse={isDiscountLoading}
                approvedCodeHandler={setApprovedCode}
                discountCodeHelper={data.discountCodeHelper}
                isValidDiscountCode={data.isValidDiscountCode}
              />

              <SubscriptionMenPaymentInfo {...currentPackage} />

              <SubscriptionMenSupport supportText={data.supportText} />

              <CustomButton
                onClick={payHandler}
                isLoading={isSubscriptionLoading}
                className="!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan mt-8"
              >
                پرداخت
              </CustomButton>
            </div>
          </div>
        )}
      </>
    </MainPageLayout>
  );
};

export default SubscriptionPage;

[
  {
    id: '70',
    viewId: '70',
    realValue: 495000,
    realValueText: '495,000',
    value: 90500,
    valueText: '90,500',
    unit: 'تومان',
    text: 'اشتراک 3 ماهه',
    isFree: false,
    isSpecific: true,
    specificText: 'اشتراک اولی',
    inAppPurchase: true,
    payButtonText: 'پرداخت',
    code: '',
    vat: 18100,
    vatText: '18,100',
    discount: 314000,
    discountText: '314,000',
    totalPay: 199100,
    totalPayText: '199,100',
    desciption: 'برای مراقبت از خودت!',
  },
  {
    id: '0',
    viewId: '0',
    realValue: 165000,
    realValueText: '165,000',
    value: 54500,
    valueText: '54,500',
    unit: 'تومان',
    text: 'اشتراک 1 ماهه',
    isFree: false,
    isSpecific: false,
    specificText: '',
    inAppPurchase: true,
    payButtonText: 'پرداخت',
    code: '',
    vat: 10900,
    vatText: '10,900',
    discount: 56000,
    discountText: '56,000',
    totalPay: 119900,
    totalPayText: '119,900',
    desciption: 'برای مراقبت از خودت!',
  },
  {
    id: '1',
    viewId: '1',
    realValue: 495000,
    realValueText: '495,000',
    value: 135000,
    valueText: '135,000',
    unit: 'تومان',
    text: 'اشتراک 3 ماهه',
    isFree: false,
    isSpecific: true,
    specificText: 'پیشنهاد ویژه',
    inAppPurchase: true,
    payButtonText: 'پرداخت',
    code: '',
    vat: 27000,
    vatText: '27,000',
    discount: 225000,
    discountText: '225,000',
    totalPay: 297000,
    totalPayText: '297,000',
    desciption: 'برای مراقبت از خودت!',
  },
  {
    id: '2',
    viewId: '2',
    realValue: 990000,
    realValueText: '990,000',
    value: 245000,
    valueText: '245,000',
    unit: 'تومان',
    text: 'اشتراک 6 ماهه',
    isFree: false,
    isSpecific: false,
    specificText: '',
    inAppPurchase: true,
    payButtonText: 'پرداخت',
    code: '',
    vat: 49000,
    vatText: '49,000',
    discount: 500000,
    discountText: '500,000',
    totalPay: 539000,
    totalPayText: '539,000',
    desciption: 'برای مراقبت از خودت!',
  },
];

[
  {
    id: '70',
    viewId: '',
    realValue: 495000,
    realValueText: '495,000',
    value: 181000,
    valueText: '181,000',
    unit: 'تومان',
    text: 'اشتراک 3 ماهه',
    isFree: false,
    isSpecific: true,
    specificText: 'اشتراک اولی',
    inAppPurchase: true,
    payButtonText: 'پرداخت',
    code: '',
    vat: 18100,
    vatText: '18,100',
    discount: 314000,
    discountText: '314,000',
    totalPay: 199100,
    totalPayText: '199,100',
    desciption: 'برای مراقبت از خودت!',
  },
  {
    id: '70',
    viewId: '70',
    realValue: 495000,
    realValueText: '495,000',
    value: 90500,
    valueText: '90,500',
    unit: 'تومان',
    text: 'اشتراک 3 ماهه',
    isFree: false,
    isSpecific: true,
    specificText: 'اشتراک اولی',
    inAppPurchase: true,
    payButtonText: 'پرداخت',
    code: '',
    vat: 18100,
    vatText: '18,100',
    discount: 314000,
    discountText: '314,000',
    totalPay: 199100,
    totalPayText: '199,100',
    desciption: 'برای مراقبت از خودت!',
  },
  {
    id: '0',
    viewId: '',
    realValue: 165000,
    realValueText: '165,000',
    value: 109000,
    valueText: '109,000',
    unit: 'تومان',
    text: 'اشتراک 1 ماهه',
    isFree: false,
    isSpecific: false,
    specificText: '',
    inAppPurchase: true,
    payButtonText: 'پرداخت',
    code: '',
    vat: 10900,
    vatText: '10,900',
    discount: 56000,
    discountText: '56,000',
    totalPay: 119900,
    totalPayText: '119,900',
    desciption: 'برای مراقبت از خودت!',
  },
  {
    id: '1',
    viewId: '',
    realValue: 495000,
    realValueText: '495,000',
    value: 270000,
    valueText: '270,000',
    unit: 'تومان',
    text: 'اشتراک 3 ماهه',
    isFree: false,
    isSpecific: true,
    specificText: 'پیشنهاد ویژه',
    inAppPurchase: true,
    payButtonText: 'پرداخت',
    code: '',
    vat: 27000,
    vatText: '27,000',
    discount: 225000,
    discountText: '225,000',
    totalPay: 297000,
    totalPayText: '297,000',
    desciption: 'برای مراقبت از خودت!',
  },
  {
    id: '2',
    viewId: '',
    realValue: 990000,
    realValueText: '990,000',
    value: 490000,
    valueText: '490,000',
    unit: 'تومان',
    text: 'اشتراک 6 ماهه',
    isFree: false,
    isSpecific: false,
    specificText: '',
    inAppPurchase: true,
    payButtonText: 'پرداخت',
    code: '',
    vat: 49000,
    vatText: '49,000',
    discount: 500000,
    discountText: '500,000',
    totalPay: 539000,
    totalPayText: '539,000',
    desciption: 'برای مراقبت از خودت!',
  },
];
