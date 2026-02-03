import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import Loading from '@components/ui/Loading';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';

import RatingDescription from './RatingDescription';
import RatingFeedback from './RatingFeedback';
import RatingFooter from './RatingFooter';
import { RATING_FOOTER_HEIGHT } from './RatingFooter/constants';
import RatingHeading from './RatingHeading';
import { RATING_HEADING_HEIGHT } from './RatingHeading/constants';
import RatingSkeleton from './RatingSkeleton';
import RatingStars from './RatingStars';
import useSubmitRate from './__hooks__/useSubmitRate';
import useValues from './__hooks__/useValues';
import { RatingContainerProps } from './types';

const RatingContainer = ({ isLoading, feedbacks, drImage, drName }: RatingContainerProps) => {
  const valuesProps = useValues();
  const { submitHandler, isRateLoading } = useSubmitRate({
    rate: valuesProps.rate,
    description: valuesProps.description,
    feedbackValues: valuesProps.feedbackValues,
  });

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH, paddingBottom: RATING_FOOTER_HEIGHT + 20 }}
      className="fixed top-0 left-0 right-0 bottom-0 min-h-[100dvh] max-h-[100dvh] flex flex-col mx-auto px-4 pt-6 overflow-y-auto z-30 bg-impo_Neutral_Background"
    >
      <RatingHeading />

      {isLoading && <RatingSkeleton />}

      {!isLoading && feedbacks && drImage && drName && (
        <>
          {isRateLoading && <Loading />}

          <div
            style={{
              marginTop: RATING_HEADING_HEIGHT + 40,
            }}
            className="relative w-full flex flex-col items-center rounded-xl px-2 pt-12 pb-6 mt-[40px] z-0 bg-impo_Neutral_Surface"
          >
            <div className="absolute left-0 right-0 -top-[40px] flex justify-center">
              <CustomImage src={drImage} width={80} className="rounded-full" />
            </div>

            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              {drName}
            </CustomTypography>

            <div className="w-full h-[1px] my-2 bg-impo_Surface_OutlineVariant" />

            <CustomTypography fontSize="Body_Medium" className="px-5 text-center text-impo_Neutral_OnBackground">
              امیدواریم این راهنمایی واست مفید باشه، به پاسخی که دریافت کردی چه امتیازی میدی؟
            </CustomTypography>

            <RatingStars rate={valuesProps.rate} rateHandler={valuesProps.rateHandler} />

            <RatingFeedback
              rate={valuesProps.rate}
              positive={feedbacks.positive}
              negative={feedbacks.negative}
              feedbackValues={valuesProps.feedbackValues}
              feedbackValuesHandler={valuesProps.feedbackValuesHandler}
            />
          </div>

          <RatingDescription
            rate={valuesProps.rate}
            onClick={submitHandler}
            description={valuesProps.description}
            descriptionHandler={valuesProps.descriptionHandler}
          />

          <RatingFooter rate={valuesProps.rate} onClick={submitHandler} />
        </>
      )}
    </div>
  );
};

export default RatingContainer;
