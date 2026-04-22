'use client';

import ImpoIcon from '@assets/shared/icons/men-impoLogo.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ACTIVATION_HEADING_ICON_WIDTH, HEADING_HEIGHT } from '@components/activation/ActivationHeading/constants';
import useActivationIsLargeScreen from '@hooks/__activation__/useActivationIsLargeScreen';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useIsRendered } from '@repo/core/hooks/useIsRendered';

import Otp3Footer from './Otp3Footer';
import { Otp3ContainerProps } from './types';

const Otp3Container = ({ otp3CompleteHandler }: Otp3ContainerProps) => {
  const { isRendered } = useIsRendered();
  const { isLargeScreen } = useActivationIsLargeScreen();

  const mainHeight = isLargeScreen ? HEADING_HEIGHT - 12 : HEADING_HEIGHT - ACTIVATION_HEADING_ICON_WIDTH;

  if (!isRendered) {
    return <></>;
  }

  return (
    <div className="overflow-hidden h-[100dvh]">
      <div className="relative w-full pt-8" style={{ minHeight: mainHeight }}>
        {isLargeScreen && (
          <ImpoIcon
            className="relative mx-auto mt-11 z-30"
            style={{ height: ACTIVATION_HEADING_ICON_WIDTH, width: ACTIVATION_HEADING_ICON_WIDTH }}
          />
        )}

        <div className="absolute bottom-10 flex justify-center align-middle">
          <img
            alt="hollow"
            src="/assets/images/coverHollow.png"
            className={`w-[100vw] max-w-[${MAX_SCREEN_WIDTH}] h-auto scale-[2] z-0 block dark:hidden`}
          />

          <img
            alt="hollow"
            src="/assets/images/coverHollow_noBackground.png"
            className={`w-[100vw] max-w-[${MAX_SCREEN_WIDTH}] h-auto scale-[2.5] z-0 hidden dark:block`}
          />
        </div>
      </div>

      <div
        style={{ maxWidth: MAX_SCREEN_WIDTH }}
        className="fixed left-0 right-0 bottom-[130px] w-full flex flex-col items-center px-4 mx-auto h-fit z-10"
      >
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          ورود یا ثبت نام
        </CustomTypography>

        <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant text-center pt-1 pb-4">
          برای ورود یا ثبت نام ایمپو دوتاراه داری میتونی یکیش رو انتخاب کنی.
        </CustomTypography>

        <CustomButton
          fontSize="Lable_Large"
          navigationLoadingId={'phone'}
          onClick={() => otp3CompleteHandler(true)}
          className="!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan text-impo_White mb-2"
        >
          ورود یا ثبت نام با موبایل
        </CustomButton>

        <CustomButton
          fontSize="Lable_Large"
          navigationLoadingId={'email'}
          spinnerClassName="border-impo_Black"
          onClick={() => otp3CompleteHandler(false)}
          className="!bg-impo_Neutral_Surface dark:!bg-impo_Neutral_OnSurface !border-impo_Neutral_Surface !text-impo_Black"
        >
          ورود یا ثبت نام با ایمیل
        </CustomButton>
      </div>

      <Otp3Footer />
    </div>
  );
};

export default Otp3Container;
