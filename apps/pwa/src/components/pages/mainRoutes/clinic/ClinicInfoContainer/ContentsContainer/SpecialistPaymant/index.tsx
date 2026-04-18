import { useEffect, useRef } from 'react';

import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { SpecialistInfoGenerator } from '@repo/core/components/clinic/SpecialistInfoGenerator';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { isDevelopeMode } from '@repo/core/utils/system';

import VpnText from '@components/ui/VpnText';
import { HEADER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useRouter } from 'next/navigation';

import DiscountInput from './DiscountInput';
import InfoPayment from './InfoPayment';
import InfoSupport from './InfoSupport';
import useBuy from './__hooks__/useBuy';
import { SpecialistPaymantProps } from './types';

const SpecialistPaymant = (props: SpecialistPaymantProps) => {
  const router = useRouter();
  const isFirstTime = useRef(isDevelopeMode());
  const { approvedCodeHandler, submitHandler, isLoading } = useBuy({
    questionValues: props.questionValues,
    type: props.type,
    id: props.id,
  });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (props.questionValues === null) {
      router.back();
    }
  }, [props.questionValues]);

  return (
    <>
      <div
        style={{ maxWidth: MAX_SCREEN_WIDTH }}
        className="fixed top-0 left-0 right-0 bottom-0 px-4 mx-auto w-full min-h-[100dvh] max-h-[100dvh] overflow-y-auto bg-impo_Neutral_Background z-30"
      >
        <div className="relative z-40">
          <MainPageLayoutHeader rightElement="BackButton" rightElementScript="پرداخت" />
        </div>

        <div className="flex flex-col gap-8 min-h-[100dvh] pb-4" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
          <div className="flex flex-col items-end ">
            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground pb-2">
              مشاوره آنلاین با پزشک
            </CustomTypography>

            <SpecialistInfoGenerator
              isSelected={false}
              image={props.image}
              isOnline={props.isOnline}
              lastName={props.lastName}
              firstName={props.firstName}
              speciliaty={props.speciliaty}
              nezamNumber={props.nezamNumber}
            />
          </div>

          <DiscountInput id={props.id} approvedCodeHandler={approvedCodeHandler} />

          <InfoPayment
            price={props.price}
            payPrice={props.payPrice}
            priceUnit={props.priceUnit}
            currentValue={props.currentValue}
            discountPrice={props.discountPrice}
          />

          <InfoSupport support={props.support} />

          <div className="mt-auto flex flex-col w-full gap-2 ">
            <VpnText />

            <CustomButton isLoading={isLoading} onClick={submitHandler} id="Clinic_Payment_Press">
              {props.submit}
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialistPaymant;
