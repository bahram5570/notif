'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { RoutinFooter } from '@repo/core/components/Routin/RoutinFooter';
import { RoutinUnlockTost } from '@repo/core/components/Routin/RoutinUnlockTost';
import { RoutinWriter } from '@repo/core/components/Routin/RoutinWriter';
import { FeedbackModal } from '@repo/core/components/ui/FeedbackModal';
import { OnboardingIntro } from '@repo/core/components/ui/OnboardingIntro';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

import useFeedback from '../../__partner__/PairRoutin/PairRoutinItemPage/__hooks__/useFeedback';
import RoutinDiets from './RoutinDiets';
import RoutinHeading from './RoutinHeading';
import RoutinSkeleton from './RoutinSkeleton';
import useFinalStepWelcoming from './__hook__/useFinalStepWelcoming';
import useGetData from './__hook__/useGetData';

const RoutinPage = () => {
  const route = useRouter();
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
      updateQuery({ queryKey: ['manHealthProgramItems'], payload });
    },
  });

  const hasItemLength = data && data.items.length > 0;
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
              <div className="w-full h-[360px] absolute top-0 left-0 right-0 bg-gradient-to-b from-[#c9d6fb] to-[#FEE8E600] -z-10 dark:bg-none" />

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
                {hasItemLength && <RoutinFooter rate={data.rate} />}
              </div>
            </div>
          )}

          <FeedbackModal
            title="امیدواریم این برنامه برات مفید بوده باشه.به برنامه امروزت چه امتیازی میدی؟"
            onSubmit={rateHandler}
            isLoading={feedbackLoading}
          />
        </>
      )}
    </MainPageLayout>
  );
};

export default RoutinPage;
