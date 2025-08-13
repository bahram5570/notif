import Button from '@components/ui/Button';
import CustomModal from '@components/ui/CustomModal';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import { RewardModalPropsType } from './type';

const RewardModal = ({ data, goToNext, correctAnswer }: RewardModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { colors } = useTheme();
  const isOpenRewardModal = getQueryParams(MODALS.ONBOARDING_QUESTION_REWARD) !== null;

  if (!data) {
    return <></>;
  }

  const backgroundColor = correctAnswer ? colors.Success_SuccessContainer : colors.Error_ErrorContainer;

  return (
    <CustomModal isOpen={isOpenRewardModal} isFullScreen={false} isSlidingMode={true} backgroundColor={backgroundColor}>
      <div className="flex flex-col items-center pb-4 gap-2" data-testid={'reward-modal-trailonboarding'}>
        <div className="flex flex-col items-end w-full px-4 gap-1">
          <Typography scale="Title" size="Medium" color={correctAnswer ? 'Success_Success' : 'Error_Error'}>
            {data.title}
          </Typography>

          <Typography scale="Body" size="Medium" color="Neutral_OnSurface" className="text-center pt-2 pb-4">
            {data.description}
          </Typography>
        </div>

        <Button size="large" variant="fill" color="onSurface" onClick={goToNext} fullWidth>
          {data.btnText}
        </Button>
      </div>
    </CustomModal>
  );
};

export default RewardModal;
