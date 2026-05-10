'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { OnboardingIntro } from '@repo/core/components/ui/OnboardingIntro';

import RoutinItemsContainer from './RoutinItemsContainer';
import RoutinSkeleton from './RoutinSkeleton';
import useFinalStepWelcoming from './__hooks__/useFinalStepWelcoming';
import useGetData from './__hooks__/useGetData';

const RoutinContainer = () => {
  const { isLoading, data } = useGetData();

  const { finalStepHandler } = useFinalStepWelcoming({ programId: data?.programId });

  return (
    <MainPageLayout rightElement="BackButton" paddingTop={0}>
      {isLoading && <RoutinSkeleton />}
      {!isLoading && data && (
        <>
          {data.wc.isActive && (
            <OnboardingIntro list={data.wc.list} finalButton={data.wc.finalButton} submitHandler={finalStepHandler} />
          )}
          {!data.wc.isActive && <RoutinItemsContainer {...data} />}
        </>
      )}
    </MainPageLayout>
  );
};

export default RoutinContainer;
