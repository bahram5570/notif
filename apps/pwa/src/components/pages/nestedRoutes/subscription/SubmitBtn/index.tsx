import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import VpnText from '@components/ui/VpnText';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import useSubmitSubscription from './__hooks__/useSubmitSubscription';
import { SubmitBtnProps } from './types';

const SubmitBtn = ({
  isFree,
  approvedCode,
  packageId,
  value,
  payButtonText,
  totalAmount,
  totalText,
  totalUnit,
}: SubmitBtnProps) => {
  const { submitHandler, isLoading } = useSubmitSubscription();

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto shadow-[0_0_16px_0_#6c23371f] pt-3 pb-8 z-30 bg-impo_Neutral_Background"
      style={{
        maxWidth: MAX_SCREEN_WIDTH,
      }}
    >
      <div className="flex flex-col justify-center gap-2 px-4">
        <VpnText />
        <div className="flex flex-row-reverse gap-2 items-center my-2">
          <div className="flex flex-col items-end w-full">
            <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
              {totalText}
            </CustomTypography>
            <div className="flex flex-row-reverse items-center gap-1">
              <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
                {totalAmount}
              </CustomTypography>
              <CustomTypography fontSize="Lable_SmallProminet" className="text-impo_Neutral_OnBackground">
                {totalUnit}
              </CustomTypography>
            </div>
          </div>
          <CustomButton
            isLoading={isLoading}
            id="SubscriptionPayment"
            onClick={() => submitHandler(isFree, { discount: approvedCode, isWeb: true, packageId, value })}
            fontSize="Lable_Large"
          >
            {payButtonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default SubmitBtn;
