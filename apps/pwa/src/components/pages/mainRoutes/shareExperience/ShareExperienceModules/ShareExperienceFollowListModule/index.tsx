import { useRef } from 'react';

import { InfiniteList } from '@repo/core/components/InfiniteList';

import { FOOTER_HEIGHT, HEADER_HEIGHT, PAGE_SIZE } from '@repo/core/constants/app.constants';

import ShareExperienceFollowItemModule from '../ShareExperienceFollowItemModule';
import EmptyState from './EmptyState';
import useGetFollowData from './__hooks__/useGetFollowData';
import { ShareExperienceFollowListModulePropsType } from './type';

const ShareExperienceFollowListModule = ({
  userId,
  EmptyStateScript,
  pageType,
}: ShareExperienceFollowListModulePropsType) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { followQueryData, isLoading, pageNo, updatePageNo } = useGetFollowData({
    userId,
    pageType,
  });

  const hasItem = followQueryData && followQueryData.items.length > 0;

  return (
    <div
      className="px-4"
      ref={scrollRef}
      style={{
        height: '100dvh',
        overflow: 'auto',
        paddingBottom: FOOTER_HEIGHT + 16,
        pointerEvents: isLoading ? 'none' : 'auto',
        paddingTop: HEADER_HEIGHT + 10,
      }}
    >
      {!hasItem && <EmptyState EmptyStateScript={EmptyStateScript} />}
      {hasItem && (
        <InfiniteList
          parentRef={scrollRef}
          list={followQueryData.items}
          pagination={{
            pageNo: pageNo,
            isLoading: isLoading,
            callPagination: updatePageNo,
            pageSize: PAGE_SIZE,
            totalCount: followQueryData.totalCount,
          }}
          renderItem={(item, index) => {
            const isLastItem = followQueryData.items.length - 1 === index;
            return (
              <ShareExperienceFollowItemModule
                isLastItem={isLastItem}
                item={item}
                key={index}
                pageType={pageType}
                userId={userId}
              />
            );
          }}
        />
      )}
    </div>
  );
};

export default ShareExperienceFollowListModule;
