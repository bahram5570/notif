import Button from '@components/ui/Button';
import CustomModal from '@components/ui/CustomModal';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import FeedbackModalDescription from './FeedbackDescription';
import FeedbackStars from './FeedbackStars';
import useSubmitRate from './__hooks__/useSubmitRate';
import useValues from './__hooks__/useValues';
import { RATING_FOOTER_HEIGHT } from './constants';
import { FeedbackModalPropsType } from './type';

const FeedbackModal = ({ title, onSubmit, isLoading }: FeedbackModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { colors } = useTheme();
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
        style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White, paddingBottom: RATING_FOOTER_HEIGHT - 40 }}
      >
        <div className="relative w-full flex flex-col items-center rounded-xl px-2 pt-6 pb-6  z-0">
          <Typography scale="Body" size="Medium" textAlign="center">
            {title}
          </Typography>

          <FeedbackStars rate={valuesProps.rate} rateHandler={valuesProps.rateHandler} />
        </div>

        <div className="w-full h-[1px] my-2" style={{ backgroundColor: colors.Neutral_Surface }} />
        <FeedbackModalDescription
          description={valuesProps.description}
          descriptionHandler={valuesProps.descriptionHandler}
        />

        <div
          className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-end gap-2 px-4 pb-6 mx-auto z-30"
          style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White }}
        >
          <Button
            variant="fill"
            size="medium"
            color="primary"
            onClick={submitHandler}
            isLoading={isLoading}
            isDisable={!valuesProps.rate}
          >
            ثبت نظر
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default FeedbackModal;
