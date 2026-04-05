'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import HistoryContainerSkeleton from './HistoryContainerSkeleton';
import HistoryItemList from './HistoryItemList';
import NotData from './NotData';
import useGetData from './__hooks__/useGetData';

const ChallengeHistoryPage = () => {
  const { isLoading, challengeData, lastExperienceRef } = useGetData();

  const hasData = challengeData && challengeData.items.length > 0;
  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript="تاریخچه سوالاتمون"
      paddingTop={!hasData ? 0 : HEADER_HEIGHT + 16}
    >
      {isLoading && <HistoryContainerSkeleton />}
      {!isLoading && !hasData && <NotData />}
      {!isLoading && hasData && <HistoryItemList lastExperienceRef={lastExperienceRef} challengeData={challengeData} />}
    </MainPageLayout>
  );
};

export default ChallengeHistoryPage;
