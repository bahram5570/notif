import { useMemo } from 'react';

import { MAX_SCREEN_WIDTH } from '../../../constants/app.constants';
import { MODAL_FEEDBACK } from '../../../constants/modal.constants';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../hooks/useSystem';
import { CustomButton } from '../CustomButton';
import { CustomModal } from '../CustomModal';
import { CustomTypography } from '../CustomTypography';
import FeedbackModalDescription from './FeedbackDescription';
import FeedbackStars from './FeedbackStars';
import useSubmitRate from './__hooks__/useSubmitRate';
import useValues from './__hooks__/useValues';
import { RATING_FOOTER_HEIGHT } from './constants';
import { FeedbackModalPropsType } from './type';

export const FeedbackModal = ({ title, onSubmit, isLoading }: FeedbackModalPropsType) => {
  const { appName } = useSystem();
  const { getQueryParams } = useQueryParamsHandler();

  const valuesProps = useValues();
  const { submitHandler } = useSubmitRate({
    rate: valuesProps.rate,
    description: valuesProps.description,
    onSubmit,
  });

  const isOpenFeedbackModal = getQueryParams(MODAL_FEEDBACK) !== null;

  const className = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan';

      default:
        return '';
    }
  }, [appName]);

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
          <CustomButton
            onClick={submitHandler}
            isLoading={isLoading}
            isDisable={!valuesProps.rate}
            className={className}
          >
            ثبت نظر
          </CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};
