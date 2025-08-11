'use client';

import OnboardingIntro from '@components/ui/OnboardingIntro';
import FeedbackModal from '@components/women/FeedbackModal';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import RoutinDiets from '../../routin/RoutinContainer/RoutinDiets';
import RoutinFooter from '../../routin/RoutinContainer/RoutinFooter';
import RoutinHeading from '../../routin/RoutinContainer/RoutinHeading';
import RoutinSkeleton from '../../routin/RoutinContainer/RoutinSkeleton';
import RoutinUnlockTost from '../../routin/RoutinContainer/RoutinUnlockTost';
import RoutinWriter from '../../routin/RoutinContainer/RoutinWriter';
import useFeedback from '../PairRoutinItemContainer/__hooks__/useFeedback';
import useFinalStepWelcoming from './__hook__/useFinalStepWelcoming';
import useGetData from './__hook__/useGetData';

const PairRoutinContainer = () => {
  const { colors } = useTheme();
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
      updateQuery({ queryKey: ['pairRoutinItems'], payload });
    },
  });

  return (
    <WomenPageLayout rightElement="BackButton" paddingTop={0} headerBackgroundColor="">
      <RoutinUnlockTost />

      {isLoading && <RoutinSkeleton />}
      {!isLoading && data && (
        <>
          {data.wc.isActive && (
            <OnboardingIntro list={data.wc.list} finalButton={data.wc.finalButton} submitHandler={finalStepHandler} />
          )}
          {!data.wc.isActive && (
            <div className="relative w-full min-h-[100dvh] px-4 pb-6 z-0" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
              <div className="w-full h-[360px] absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FEE8E6] to-[#FEE8E600] -z-10" />

              <div className="relative z-10">
                <RoutinHeading image={data.image} description={data.description} title={data.title} />

                <div className="w-full rounded-xl p-3" style={{ backgroundColor: colors.White }}>
                  <RoutinWriter
                    writerName={data.writerName}
                    writerIcon={data.writerIcon}
                    writerSpeciality={data.writerSpeciality}
                  />

                  <div className="w-full h-[1px] my-3" style={{ backgroundColor: colors.Surface_SurfaceVariant }} />

                  <RoutinDiets name={data.name} items={data.items} />
                </div>

                <RoutinFooter rate={data.rate} />
              </div>
            </div>
          )}

          <FeedbackModal
            title=" امیدواریم این مرحله واست مفید باشه، به این مرحله از روتین پوستی چه امتیازی میدی؟"
            onSubmit={rateHandler}
            isLoading={feedbackLoading}
          />
        </>
      )}
    </WomenPageLayout>
  );
};

export default PairRoutinContainer;
