'use client';

import OnboardingIntro from '@components/ui/OnboardingIntro';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import RoutinCommentList from './RoutinCommentList';
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
  const { isLoading, data } = useGetData();
  const { tab, tabHandler } = useRoutinTab();
  const { finalStepHandler } = useFinalStepWelcoming({ programId: data?.programId });

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
            <div className="relative w-full  px-4 pb-6 z-0" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
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
                  {tab === RoutinTabNameEnum.Items && <RoutinItemsTab {...data} />}
                  {tab === RoutinTabNameEnum.Comments && (
                    <RoutinCommentList programId={data.programId} commentPlaceholder={data.commentPlaceholder} />
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </WomenPageLayout>
  );
};

export default RoutinContainer;
