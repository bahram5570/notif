'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import MemoryContainerSkeleton from './MemoryContainerSkeleton';
import MemoryData from './MemoryData';
import NotData from './NotData';
import useGetData from './__hooks__/useGetData';

const MemoryPage = () => {
  const { isLoading, memoriesData, pageNo, totalCount, updatePageNo } = useGetData();

  const hasData = memoriesData && memoriesData.memories.length > 0;

  return (
    <>
      {isLoading && <MemoryContainerSkeleton />}

      {!isLoading && (
        <MainPageLayout
          rightElement="BackButton"
          rightElementScript="خاطره بازی"
          paddingTop={!hasData ? 0 : HEADER_HEIGHT + 16}
        >
          <InfiniteScrollContainer
            totalCount={totalCount}
            pageNo={pageNo}
            isLoading={isLoading}
            callBack={updatePageNo}
            height={'100dvh'}
          >
            {!hasData ? <NotData /> : <MemoryData memories={memoriesData?.memories} />}
          </InfiniteScrollContainer>
        </MainPageLayout>
      )}
    </>
  );
};

export default MemoryPage;
