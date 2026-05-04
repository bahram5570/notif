import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODALS } from '@constants/modals.constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { RewardModalPropsType } from './type';

const RewardModal = ({ data, goToNext, correctAnswer }: RewardModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const isOpenRewardModal = getQueryParams(MODALS.ONBOARDING_QUESTION_REWARD) !== null;

  if (!data) {
    return <></>;
  }

  return (
    <CustomModal
      isOpen={isOpenRewardModal}
      isFullScreen={false}
      isSlidingMode={true}
      className={`pb-0 ${correctAnswer ? 'bg-impo_Success_SuccessContainer' : 'bg-impo_Error_ErrorContainer'}`}
    >
      <div className="flex flex-col items-center pb-4 gap-2" data-testid={'reward-modal-trailonboarding'}>
        <div className="flex flex-col items-end w-full px-4 gap-1">
          <CustomTypography
            fontSize="Title_Medium"
            className={`${correctAnswer ? 'text-impo_Success_Success' : 'text-impo_Error_Error'}`}
          >
            {data.title}
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="text-center pt-2 pb-4 text-impo_Neutral_OnSurface">
            {data.description}
          </CustomTypography>
        </div>

        <CustomButton
          onClick={goToNext}
          className="h-12 !bg-impo_Neutral_OnSurface !border-impo_Neutral_OnSurface !text-impo_Neutral_Background"
          fontSize="Title_Small"
        >
          {data.btnText}
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default RewardModal;
