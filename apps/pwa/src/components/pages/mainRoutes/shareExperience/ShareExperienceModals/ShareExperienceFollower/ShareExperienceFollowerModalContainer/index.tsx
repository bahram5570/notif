import MainPageLayout from '@components/MainPageLayout';
import MainPageLayoutHeader from '@components/MainPageLayout/MainPageLayoutHeader';
import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import useOverflowHandler from '@hooks/useOverflowHandler';

import ShareExperienceFollowListModule from '../../../ShareExperienceModules/ShareExperienceFollowListModule';
import useGetFollowerData from './__hooks__/useGetFollowerData';
import { ShareExperienceFollowerModalContainerProps } from './type';

const ShareExperienceFollowerModalContainer = ({ userId, queryParam }: ShareExperienceFollowerModalContainerProps) => {
  useOverflowHandler(queryParam !== null);
  const { data, isLoading, pageNo, totalCount, updatePageNo, firstLoading } = useGetFollowerData({ userId });

  const loading = isLoading && firstLoading;

  return (
    <>
      <MainPageLayoutHeader
        rightElement="BackButton"
        middleScript="دنبال کننده ها"
        className="!bg-impo_Neutral_Surface"
      />
      <InfiniteScrollContainer
        isLoading={loading}
        pageNo={pageNo}
        totalCount={totalCount}
        callBack={updatePageNo}
        height={'100dvh'}
      >
        {firstLoading && (
          <div className="w-full flex justify-center pb-10">
            <Dark_Spinner className="border-impo_Primary_Primary" />
          </div>
        )}
        {!firstLoading && data && (
          <ShareExperienceFollowListModule items={data.items} EmptyStateScript="هنوز کسی رو دنبال نکردی" />
        )}
      </InfiniteScrollContainer>
    </>
  );
};

export default ShareExperienceFollowerModalContainer;
