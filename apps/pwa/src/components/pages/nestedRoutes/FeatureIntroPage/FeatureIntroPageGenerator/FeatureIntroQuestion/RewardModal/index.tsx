import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomModal from '@components/ui/CustomModal';
import Dark_Button from '@components/ui/Dark_Button';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

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

        <Dark_Button
          onClick={goToNext}
          className="h-12 !bg-impo_Neutral_OnSurface !border-impo_Neutral_OnSurface !text-impo_Neutral_Background"
          fontSize="Title_Small"
        >
          {data.btnText}
        </Dark_Button>
      </div>
    </CustomModal>
  );
};

export default RewardModal;
