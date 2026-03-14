'use client';

import { useRef } from 'react';

import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import MemoryContainerSkeleton from './MemoryContainerSkeleton';
import MemoryData from './MemoryData';
import NotData from './NotData';
import useGetData from './__hooks__/useGetData';
import useGetPartnerName from './__hooks__/useGetPartnerName';

const MemoryPage = () => {
  const { isLoading, memoriesData, pageNo, totalCount, updatePageNo } = useGetData();
  const { partnerDetail } = useGetPartnerName();

  const hasData = memoriesData && memoriesData.memories.length > 0;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const firstLoading = isLoading && pageNo === 0;

  return (
    <>
      <MainPageLayoutHeader rightElement="BackButton" rightElementScript="ثبت خاطره" leftElement1="Profile" />
      <div
        className="flex flex-col gap-5 px-4 min-h-[100dvh] "
        style={{ paddingTop: HEADER_HEIGHT }}
        ref={containerRef}
      >
        <InfiniteScrollContainer
          totalCount={totalCount}
          pageNo={pageNo}
          isLoading={isLoading}
          callBack={updatePageNo}
          scrollContainerRef={containerRef}
        >
          {firstLoading && <MemoryContainerSkeleton />}
          {!hasData ? (
            <NotData partName={partnerDetail?.name} />
          ) : (
            <MemoryData memories={memoriesData.memories} partName={partnerDetail?.name} />
          )}
        </InfiniteScrollContainer>
      </div>
    </>
  );
};

export default MemoryPage;
