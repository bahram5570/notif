'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { RoutinCta } from '@repo/core/components/Routin/RoutinCta';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import FeedbackModal from '@components/FeedbackModal';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import { ProgramWidgetItemStatusEnum } from '../enum';
import EmptyState from './EmptyState';
import RoutinItemHeading from './RoutinItemHeading';
import RoutinItemSkeleton from './RoutinItemSkeleton';
import useFeedback from './__hooks__/useFeedback';
import useGetData from './__hooks__/useGetData';
import useSeen from './__hooks__/useSeen';

const RoutinItemContainer = () => {
  const { isLoading, data, programId } = useGetData();
  const { onSeenHandler, isLoading: seenLoading } = useSeen();
  const { isLoading: feedbackLoading, rateHandler } = useFeedback({
    programId,
  });

  return (
    <MainPageLayout rightElement="BackButton" paddingTop={0}>
      <div
        className=" w-full flex relative z-0 flex-col  gap-6  h-[100dvh]  px-4  pb-6"
        style={{ paddingTop: HEADER_HEIGHT + 16 }}
      >
        <div className="w-full h-[360px] absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FEE8E6] to-[#FEE8E600] -z-10 dark:!bg-none" />

        {isLoading && <RoutinItemSkeleton />}

        {!isLoading && data && (
          <>
            <RoutinItemHeading
              title={data.title}
              description={data.description}
              icon={data.icon}
              status={data.status}
            />

            {data.status === ProgramWidgetItemStatusEnum.locked && <EmptyState />}
            {data.status !== ProgramWidgetItemStatusEnum.locked && (
              <>
                <div
                  style={{ paddingBottom: FOOTER_HEIGHT }}
                  dir="rtl"
                  className="text-impo_Neutral_OnBackground"
                  dangerouslySetInnerHTML={{ __html: JSON.parse(data.data) }}
                />

                {data.cta.ctaBtnLabel && data.cta.ctaDescription && <RoutinCta cta={data.cta} />}

                <div className="mt-auto p-2">
                  <CustomButton
                    onClick={onSeenHandler}
                    isDisable={data.status === ProgramWidgetItemStatusEnum.Compelet}
                    className="text-impo_Primary_Primary bg-impo_Primary_PrimaryContainer border-impo_Primary_PrimaryContainer"
                    isLoading={seenLoading}
                  >
                    <CustomTypography fontSize="Lable_Large" className="text-impo_Primary_Primary">
                      {data.compeletButtonLabel}
                    </CustomTypography>
                  </CustomButton>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <FeedbackModal
        title=" امیدواریم این مرحله واست مفید باشه، به این مرحله از روتین  چه امتیازی میدی؟"
        onSubmit={rateHandler}
        isLoading={feedbackLoading}
      />
    </MainPageLayout>
  );
};

export default RoutinItemContainer;
