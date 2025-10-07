'use client';

import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

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
        <WomenPageLayout
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
        </WomenPageLayout>
      )}
    </>
  );
};

export default MemoryPage;
