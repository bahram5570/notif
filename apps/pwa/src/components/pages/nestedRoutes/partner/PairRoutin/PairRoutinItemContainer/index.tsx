'use client';

import FeedbackModal from '@components/FeedbackModal';
import { FOOTER_HEIGTH } from '@components/WomenFooter/constants';
import WomenPageLayout from '@components/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import { useRouter } from 'next/navigation';

import { ProgramWidgetItemStatusEnum } from '../enum';
import EmptyState from './EmptyState';
import RoutinItemHeading from './RoutinItemHeading';
import RoutinItemSkeleton from './RoutinItemSkeleton';
import useFeedback from './__hooks__/useFeedback';
import useGetPairRoutinItemData from './__hooks__/useGetData';
import useSeen from './__hooks__/useSeen';

const PairRoutinItemContainer = () => {
  const route = useRouter();

  const { isLoading, data, programId } = useGetPairRoutinItemData();
  const { onSeenHandler, isLoading: seenLoading } = useSeen();
  const { isLoading: feedbackLoading, rateHandler } = useFeedback({
    programId,
    onComplete: () => {
      route.back();
      setTimeout(() => {
        route.back();
      }, 0);
    },
  });

  return (
    <WomenPageLayout rightElement="BackButton" paddingTop={0}>
      <div
        className=" w-full flex relative z-0 flex-col  gap-6  h-[100dvh]  px-4  pb-6"
        style={{ paddingTop: HEADER_HEIGHT + 16 }}
      >
        <div className="w-full h-[360px] absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FEE8E6] to-[#FEE8E600] -z-10 dark:bg-none" />

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
                  className="!text-impo_Neutral_OnBackground"
                  dir="rtl"
                  style={{ paddingBottom: FOOTER_HEIGTH }}
                  dangerouslySetInnerHTML={{ __html: JSON.parse(data.data) }}
                />
                <div className="mt-auto p-2">
                  <Dark_Button
                    onClick={onSeenHandler}
                    isDisable={data.status === ProgramWidgetItemStatusEnum.Compelet}
                    isLoading={seenLoading}
                    className="bg-impo_Primary_PrimaryContainer text-impo_Primary_Primary border-impo_Primary_PrimaryContainer"
                  >
                    <Dark_Typography fontSize="Lable_Large" className="text-impo_Primary_Primary">
                      {data.compeletButtonLabel}
                    </Dark_Typography>
                  </Dark_Button>
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
    </WomenPageLayout>
  );
};

export default PairRoutinItemContainer;
