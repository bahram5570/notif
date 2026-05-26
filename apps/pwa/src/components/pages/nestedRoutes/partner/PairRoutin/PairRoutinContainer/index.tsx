'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { FeedbackModal } from '@repo/core/components/ui/FeedbackModal';
import { OnboardingIntro } from '@repo/core/components/ui/OnboardingIntro';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import useFeedback from '../PairRoutinItemContainer/__hooks__/useFeedback';
import RoutinDiets from './RoutinDiets';
import RoutinFooter from './RoutinFooter';
import RoutinHeading from './RoutinHeading';
import RoutinSkeleton from './RoutinSkeleton';
import RoutinUnlockTost from './RoutinUnlockTost';
import RoutinWriter from './RoutinWriter';
import useFinalStepWelcoming from './__hook__/useFinalStepWelcoming';
import useGetData from './__hook__/useGetData';

const PairRoutinContainer = () => {
  const route = useCustomRouter();
  const { updateQuery } = useCustomReactQuery();
  const { data, isLoading } = useGetData();
  const { finalStepHandler } = useFinalStepWelcoming({ programId: data?.programId });
  const {
    isLoading: feedbackLoading,
    rateHandler,
    feedbackData,
  } = useFeedback({
    programId: data?.programId,
    onComplete: () => {
      route.back();
      const payload = { ...data, rate: feedbackData };
      updateQuery({ queryKey: ['pairRoutinItems'], payload });
    },
  });

  return (
    <MainPageLayout rightElement="BackButton" paddingTop={0}>
      <RoutinUnlockTost />

      {isLoading && <RoutinSkeleton />}
      {!isLoading && data && (
        <>
          {data.wc.isActive && (
            <OnboardingIntro list={data.wc.list} finalButton={data.wc.finalButton} submitHandler={finalStepHandler} />
          )}
          {!data.wc.isActive && (
            <div className="relative w-full min-h-[100dvh] px-4 pb-6 z-0" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
              <div className="w-full h-[360px] absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FEE8E6] to-[#FEE8E600] -z-10 dark:bg-none" />

              <div className="relative z-10">
                <RoutinHeading image={data.image} description={data.description} title={data.title} />

                <div className="w-full rounded-xl p-3 bg-impo_Neutral_Surface">
                  <RoutinWriter
                    writerName={data.writerName}
                    writerIcon={data.writerIcon}
                    writerSpeciality={data.writerSpeciality}
                  />

                  <div className="w-full h-[1px] my-3 bg-impo_Surface_SurfaceVariant" />

                  <RoutinDiets name={data.name} items={data.items} />
                </div>

                <RoutinFooter rate={data.rate} />
              </div>
            </div>
          )}

          <FeedbackModal
            title=" امیدواریم این مرحله واست مفید باشه، به این مرحله از روتین  چه امتیازی میدی؟"
            onSubmit={rateHandler}
            isLoading={feedbackLoading}
          />
        </>
      )}
    </MainPageLayout>
  );
};

export default PairRoutinContainer;
