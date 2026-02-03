import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomModal from '@components/ui/CustomModal';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import FeedbackModalDescription from './FeedbackDescription';
import FeedbackStars from './FeedbackStars';
import useSubmitRate from './__hooks__/useSubmitRate';
import useValues from './__hooks__/useValues';
import { RATING_FOOTER_HEIGHT } from './constants';
import { FeedbackModalPropsType } from './type';

const FeedbackModal = ({ title, onSubmit, isLoading }: FeedbackModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();

  const valuesProps = useValues();
  const { submitHandler } = useSubmitRate({
    rate: valuesProps.rate,
    description: valuesProps.description,
    onSubmit,
  });

  const isOpenFeedbackModal = getQueryParams(MODALS.MODAL_FEEDBACK) !== null;

  return (
    <CustomModal isOpen={isOpenFeedbackModal} isSlidingMode>
      <div
        style={{ maxWidth: MAX_SCREEN_WIDTH, paddingBottom: RATING_FOOTER_HEIGHT - 40 }}
        className="bg-impo_Neutral_Background"
      >
        <div className="relative w-full flex flex-col items-center rounded-xl px-2 pt-6 pb-6  z-0">
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
            {title}
          </CustomTypography>

          <FeedbackStars rate={valuesProps.rate} rateHandler={valuesProps.rateHandler} />
        </div>

        <div className="w-full h-[1px] my-2 bg-impo_Neutral_Surface" />
        <FeedbackModalDescription
          description={valuesProps.description}
          descriptionHandler={valuesProps.descriptionHandler}
        />

        <div
          className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-end gap-2 px-4 pb-6 mx-auto z-30 bg-impo_Neutral_Background"
          style={{ maxWidth: MAX_SCREEN_WIDTH }}
        >
          <CustomButton onClick={submitHandler} isLoading={isLoading} isDisable={!valuesProps.rate}>
            ثبت نظر
          </CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default FeedbackModal;
