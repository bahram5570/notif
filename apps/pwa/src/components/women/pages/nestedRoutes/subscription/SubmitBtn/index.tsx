import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import VpnText from '@components/ui/VpnText';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

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
            <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
              {totalText}
            </Dark_Typography>
            <div className="flex flex-row-reverse items-center gap-1">
              <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
                {totalAmount}
              </Dark_Typography>
              <Dark_Typography fontSize="Lable_SmallProminet" className="text-impo_Neutral_OnBackground">
                {totalUnit}
              </Dark_Typography>
            </div>
          </div>
          <Dark_Button
            isLoading={isLoading}
            id="SubscriptionPayment"
            onClick={() => submitHandler(isFree, { discount: approvedCode, isWeb: true, packageId, value })}
            fontSize="Lable_Large"
          >
            {payButtonText}
          </Dark_Button>
        </div>
      </div>
    </div>
  );
};

export default SubmitBtn;
