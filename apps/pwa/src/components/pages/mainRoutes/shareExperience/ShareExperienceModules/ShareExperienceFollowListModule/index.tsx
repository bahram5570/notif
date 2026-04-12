import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import ShareExperienceFollowItemModule from '../ShareExperienceFollowItemModule';
import EmptyState from './EmptyState';
import useGetFollowData from './__hooks__/useGetFollowData';
import { ShareExperienceFollowListModulePropsType } from './type';

const ShareExperienceFollowListModule = ({
  userId,
  EmptyStateScript,
  pageType,
}: ShareExperienceFollowListModulePropsType) => {
  const { followQueryData, isLoading, pageNo, updatePageNo } = useGetFollowData({
    userId,
    pageType,
  });

  const hasItem = followQueryData && followQueryData.items.length > 0;

  return (
    <InfiniteScrollContainer
      isLoading={isLoading}
      pageNo={pageNo}
      totalCount={followQueryData?.totalCount || 10}
      callBack={updatePageNo}
      height={'100dvh'}
    >
      {followQueryData && (
        <div className="flex flex-col px-4 h-full" style={{ paddingTop: HEADER_HEIGHT + 10 }}>
          {!hasItem && <EmptyState EmptyStateScript={EmptyStateScript} />}
          {hasItem &&
            followQueryData.items.map((item, index) => {
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
            })}
        </div>
      )}
    </InfiniteScrollContainer>
  );
};

export default ShareExperienceFollowListModule;
