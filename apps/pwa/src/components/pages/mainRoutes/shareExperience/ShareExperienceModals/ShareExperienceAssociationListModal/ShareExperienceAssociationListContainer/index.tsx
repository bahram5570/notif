import { useRef } from 'react';

import { InfiniteList } from '@repo/core/components/InfiniteList';
import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { HEADER_HEIGHT, PAGE_SIZE } from '@repo/core/constants/app.constants';

import EmptyState from './EmptyState';
import ShareExperienceAssociationItem from './ShareExperienceAssociationItem';
import useGetAssociationListData from './__hooks__/useGetAssociationListData';

const ShareExperienceAssociationListContainer = () => {
  const { associationListData, isLoading, pageNo, updatePageNo, firstLoading } = useGetAssociationListData();
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasAssociationList = associationListData && associationListData.items.length > 0;

  return (
    <>
      <MainPageLayoutHeader rightElement="BackButton" middleScript="پاتوق ها" className="bg-impo_Neutral_Surface" />
      <div
        ref={scrollRef}
        style={{
          height: '100dvh',
          overflow: 'auto',
          pointerEvents: isLoading ? 'none' : 'auto',
          paddingTop: hasAssociationList ? HEADER_HEIGHT + 10 : 0,
        }}
      >
        {firstLoading && !associationListData && (
          <div className="flex justify-center items-center w-full h-full " style={{ paddingTop: HEADER_HEIGHT + 10 }}>
            <CustomSpinner />
          </div>
        )}
        {!firstLoading && associationListData && (
          <>
            {!hasAssociationList && <EmptyState />}
            <InfiniteList
              parentRef={scrollRef}
              list={associationListData.items}
              pagination={{
                pageNo: pageNo,
                isLoading: isLoading,
                callPagination: updatePageNo,
                pageSize: PAGE_SIZE,
                totalCount: associationListData.totalCount,
              }}
              renderItem={(item, index) => {
                const isLastItem = associationListData.items.length - 1 === index;
                return <ShareExperienceAssociationItem key={item.id} isLastItem={isLastItem} {...item} />;
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ShareExperienceAssociationListContainer;
