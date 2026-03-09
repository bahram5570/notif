'use client';

import { useRef } from 'react';

import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import MemoryContainerSkeleton from './MemoryContainerSkeleton';
import MemoryData from './MemoryData';
import NotData from './NotData';
import useGetData from './__hooks__/useGetData';

const MemoryPage = () => {
  const { isLoading, memoriesData, pageNo, totalCount, updatePageNo } = useGetData();

  const hasData = memoriesData && memoriesData.memories.length > 0;
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <MainPageLayoutHeader rightElement="BackButton" rightElementScript="ثبت خاطره" leftElement1="Profile" />
      <div
        className="flex flex-col gap-5 px-4 min-h-[100dvh] "
        style={{ paddingTop: HEADER_HEIGHT }}
        ref={containerRef}
      >
        {isLoading && <MemoryContainerSkeleton />}
        <InfiniteScrollContainer
          totalCount={totalCount}
          pageNo={pageNo}
          isLoading={isLoading}
          callBack={updatePageNo}
          scrollContainerRef={containerRef}
        >
          {!hasData ? <NotData /> : <MemoryData memories={memoriesData.memories} />}
        </InfiniteScrollContainer>
      </div>
    </>
  );
};

export default MemoryPage;
