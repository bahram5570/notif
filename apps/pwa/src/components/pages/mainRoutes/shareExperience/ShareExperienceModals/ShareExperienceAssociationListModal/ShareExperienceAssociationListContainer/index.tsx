import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import EmptyState from './EmptyState';
import ShareExperienceAssociationItem from './ShareExperienceAssociationItem';
import useGetAssociationListData from './__hooks__/useGetAssociationListData';

const ShareExperienceAssociationListContainer = () => {
  const { associationListData, isLoading, pageNo, updatePageNo, firstLoading } = useGetAssociationListData();
  const hasAssociationList = associationListData && associationListData.items.length > 0;

  return (
    <>
      <MainPageLayoutHeader rightElement="BackButton" middleScript="پاتوق ها" className="bg-impo_Neutral_Surface" />
      {firstLoading && !associationListData && (
        <div className="flex justify-center items-center w-full h-full " style={{ paddingTop: HEADER_HEIGHT + 10 }}>
          <CustomSpinner />
        </div>
      )}
      {!firstLoading && (
        <InfiniteScrollContainer
          isLoading={isLoading}
          pageNo={pageNo}
          totalCount={associationListData?.totalCount || 10}
          callBack={updatePageNo}
          height={'100dvh'}
          style={{ paddingTop: hasAssociationList ? HEADER_HEIGHT + 10 : 0 }}
        >
          {!hasAssociationList && <EmptyState />}
          {hasAssociationList && (
            <div className="flex flex-col  h-full">
              {associationListData.items.map((item, index) => {
                const isLastItem = associationListData.items.length - 1 === index;
                return <ShareExperienceAssociationItem key={item.id} isLastItem={isLastItem} {...item} />;
              })}
            </div>
          )}
        </InfiniteScrollContainer>
      )}
    </>
  );
};

export default ShareExperienceAssociationListContainer;
