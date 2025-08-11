'use client';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import FeedbackModal from '@components/women/FeedbackModal';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { ProgramWidgetItemStatusEnum } from '../enum';
import EmptyState from './EmptyState';
import RoutinItemHeading from './RoutinItemHeading';
import RoutinItemSkeleton from './RoutinItemSkeleton';
import useFeedback from './__hooks__/useFeedback';
import useGetData from './__hooks__/useGetData';
import useSeen from './__hooks__/useSeen';

const RoutinItemContainer = () => {
  const route = useRouter();
  const { colors } = useTheme();

  const { isLoading, data, programId } = useGetData();
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
    <WomenPageLayout rightElement="BackButton" paddingTop={0} headerBackgroundColor="">
      <div
        className=" w-full flex relative z-0 flex-col  gap-6  h-[100dvh]  px-4  pb-6"
        style={{ paddingTop: HEADER_HEIGHT + 16 }}
      >
        <div className="w-full h-[360px] absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FEE8E6] to-[#FEE8E600] -z-10" />

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
                  style={{ paddingBottom: FOOTER_HEIGTH }}
                  dangerouslySetInnerHTML={{ __html: JSON.parse(data.data) }}
                />
                <div className="mt-auto p-2">
                  <Button
                    color="FREE-STYLES"
                    buttonColor={colors.PrimaryWoman_PrimaryContainer}
                    contentsColor={colors.PrimaryWoman_Primary}
                    fullWidth
                    size="large"
                    onClick={onSeenHandler}
                    isDisable={data.status === ProgramWidgetItemStatusEnum.Compelet}
                    variant="fill"
                    isLoading={seenLoading}
                  >
                    <Typography scale="Lable" size="Large" color="PrimaryWoman_Primary">
                      {data.compeletButtonLabel}
                    </Typography>
                  </Button>
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

export default RoutinItemContainer;
