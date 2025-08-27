'use client';

import RoutinWriter from '@components/__routin__/RoutinWriter';
import OnboardingIntro from '@components/ui/OnboardingIntro';
import FeedbackModal from '@components/women/FeedbackModal';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import useFeedback from '../RoutinItemContainer/__hooks__/useFeedback';
import RoutinCommentList from './RoutinCommentList';
import RoutinDiets from './RoutinDiets';
import RoutinFooter from './RoutinFooter';
import RoutinHeading from './RoutinHeading';
import RoutinItemsTab from './RoutinItemsTab';
import RoutinSkeleton from './RoutinSkeleton';
import RoutinTab from './RoutinTab';
import { RoutinTabNameEnum } from './RoutinTab/enum';
import RoutinUnlockTost from './RoutinUnlockTost';
import useFinalStepWelcoming from './__hooks__/useFinalStepWelcoming';
import useGetData from './__hooks__/useGetData';
import useRoutinTab from './__hooks__/useRoutinTab';

const RoutinContainer = () => {
  const { colors } = useTheme();
  const route = useRouter();
  const { updateQuery } = useCustomReactQuery();
  const { isLoading, data } = useGetData();
  const { tab, tabHandler } = useRoutinTab();
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
      updateQuery({ queryKey: ['routinItems'], payload });
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
                <RoutinHeading {...data} />

                <div className="w-full rounded-xl p-3 overflow-y-hidden" style={{ backgroundColor: colors.White }}>
                  <RoutinTab
                    commentTabName={data.commentTabName}
                    itemsTabName={data.itemsTabName}
                    tab={tab}
                    tabHandler={tabHandler}
                  />
                  {tab === RoutinTabNameEnum.Items && <RoutinItemsTab name={data.name} items={data.items} />}
                  {tab === RoutinTabNameEnum.Comments && <RoutinCommentList programId={data.programId} tab={tab} />}
                </div>

                {/* <RoutinFooter rate={data.rate} /> */}
              </div>
            </div>
          )}

          {/* <FeedbackModal
            title=" امیدواریم این مرحله واست مفید باشه، به این مرحله از روتین  چه امتیازی میدی؟"
            onSubmit={rateHandler}
            isLoading={feedbackLoading}
          /> */}
        </>
      )}
    </WomenPageLayout>
  );
};

export default RoutinContainer;
