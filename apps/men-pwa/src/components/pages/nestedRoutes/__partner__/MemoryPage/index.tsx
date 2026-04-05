'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
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

  const firstLoading = isLoading && pageNo === 0;

  return (
    <>
      <MainPageLayout
        rightElement="BackButton"
        rightElementScript="خاطره بازی"
        paddingTop={!hasData ? 0 : HEADER_HEIGHT + 16}
        leftElement1="Profile"
      >
        <InfiniteScrollContainer
          totalCount={totalCount}
          pageNo={pageNo}
          isLoading={isLoading}
          callBack={updatePageNo}
          height={'100dvh'}
        >
          {firstLoading && <MemoryContainerSkeleton />}
          {!hasData ? (
            <NotData partName={partnerDetail?.name} />
          ) : (
            <MemoryData memories={memoriesData.memories} partName={partnerDetail?.name} />
          )}
        </InfiniteScrollContainer>
      </MainPageLayout>
    </>
  );
};

export default MemoryPage;
