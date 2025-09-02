'use client';

import OnboardingIntro from '@components/ui/OnboardingIntro';
import WomenPageLayout from '@components/women/WomenPageLayout';

import { ProgramWidgetCompleteEnum } from '../enum';
import RoutinItemsContainer from './RoutinItemsContainer';
import RoutinSkeleton from './RoutinSkeleton';
import RoutinUnlockTost from './RoutinUnlockTost';
import useFinalStepWelcoming from './__hooks__/useFinalStepWelcoming';
import useGetData from './__hooks__/useGetData';

const RoutinContainer = () => {
  const { isLoading, data } = useGetData();

  const { finalStepHandler } = useFinalStepWelcoming({ programId: data?.programId });

  return (
    <WomenPageLayout rightElement="BackButton" paddingTop={0} headerBackgroundColor="">
      {isLoading && <RoutinSkeleton />}
      {!isLoading && data && (
        <>
          {data.compeletItemType !== ProgramWidgetCompleteEnum.Simple && (
            <RoutinUnlockTost compeletItemType={data.compeletItemType} />
          )}
          {data.wc.isActive && (
            <OnboardingIntro list={data.wc.list} finalButton={data.wc.finalButton} submitHandler={finalStepHandler} />
          )}
          {!data.wc.isActive && <RoutinItemsContainer {...data} />}
        </>
      )}
    </WomenPageLayout>
  );
};

export default RoutinContainer;
