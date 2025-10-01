import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import VpnText from '@components/ui/VpnText';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

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
  const { colors } = useTheme();
  const { submitHandler, isLoading } = useSubmitSubscription();

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto shadow-[0_0_16px_0_#6c23371f] pt-3 pb-8 z-30"
      style={{
        maxWidth: MAX_SCREEN_WIDTH,
        backgroundColor: colors.Neutral_Background,
      }}
    >
      <div className="flex flex-col justify-center gap-2 px-4">
        <VpnText />
        <div className="flex flex-row-reverse gap-2 items-center my-2">
          <div className="flex flex-col items-end w-full">
            <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
              {totalText}
            </Typography>
            <div className="flex flex-row-reverse items-center gap-1">
              <Typography scale="Title" size="Small" color="Neutral_OnBackground">
                {totalAmount}
              </Typography>
              <Typography scale="Lable" size="SmallProminet">
                {totalUnit}
              </Typography>
            </div>
          </div>
          <Button
            size="medium"
            variant="fill"
            color="primary"
            isLoading={isLoading}
            id="SubscriptionPayment"
            onClick={() => submitHandler(isFree, { discount: approvedCode, isWeb: true, packageId, value })}
          >
            {payButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmitBtn;
