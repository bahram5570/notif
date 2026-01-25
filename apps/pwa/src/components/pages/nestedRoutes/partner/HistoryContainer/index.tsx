'use client';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';

import HistoryContainerSkeleton from './HistoryContainerSkeleton';
import HistoryItemList from './HistoryItemList';
import NotData from './NotData';
import useGetData from './__hooks__/useGetData';

const HistoryContainer = () => {
  const { isLoading, challengeData, lastExperienceRef } = useGetData();

  const hasData = challengeData && challengeData.items.length > 0;

  return (
    <>
      {isLoading && <HistoryContainerSkeleton />}
      {!isLoading && (
        <MainPageLayout
          rightElement="BackButton"
          rightElementScript="تاریخچه سوالاتمون"
          paddingTop={!hasData ? 0 : HEADER_HEIGHT + 16}
        >
          {!hasData ? (
            <NotData />
          ) : (
            <HistoryItemList lastExperienceRef={lastExperienceRef} challengeData={challengeData} />
          )}
        </MainPageLayout>
      )}
    </>
  );
};

export default HistoryContainer;
