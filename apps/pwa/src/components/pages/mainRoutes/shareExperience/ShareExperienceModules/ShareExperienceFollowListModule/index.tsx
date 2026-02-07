import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import Dark_Spinner from '@components/ui/Dark_Spinner';

import ShareExperienceFollowItemModule from '../ShareExperienceFollowItemModule';
import EmptyState from './EmptyState';
import useGetFollowData from './__hooks__/useGetFollowData';
import { ShareExperienceFollowListModulePropsType } from './type';

const ShareExperienceFollowListModule = ({
  userId,
  EmptyStateScript,
  pageType,
}: ShareExperienceFollowListModulePropsType) => {
  const { followQueryData, isLoading, pageNo, updatePageNo, firstLoading } = useGetFollowData({
    userId,
    pageType,
  });

  const loading = isLoading && !firstLoading;
  const hasItem = followQueryData && followQueryData.items.length > 0;

  return (
    <InfiniteScrollContainer
      isLoading={loading}
      pageNo={pageNo}
      totalCount={followQueryData?.totalCount || 10}
      callBack={updatePageNo}
      height={'100dvh'}
    >
      {firstLoading && (
        <div className="w-full flex justify-center pb-10">
          <Dark_Spinner className="border-impo_Primary_Primary" />
        </div>
      )}

      {!firstLoading && followQueryData && (
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
