import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';

import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import ShareExperienceAssociationItem from './ShareExperienceAssociationItem';
import useGetAssociationListData from './__hooks__/useGetAssociationListData';

const ShareExperienceAssociationListContainer = () => {
  const { associationListData, isLoading, pageNo, updatePageNo } = useGetAssociationListData();

  return (
    <>
      <MainPageLayoutHeader rightElement="BackButton" middleScript="انجمن ها" className="bg-impo_Neutral_Surface" />

      <InfiniteScrollContainer
        isLoading={isLoading}
        pageNo={pageNo}
        totalCount={associationListData?.totalCount || 10}
        callBack={updatePageNo}
        height={'100dvh'}
        style={{ paddingTop: HEADER_HEIGHT + 10 }}
      >
        {associationListData && (
          <div className="flex flex-col  h-full">
            {associationListData.items.map((item, index) => {
              const isLastItem = associationListData.items.length - 1 === index;
              return <ShareExperienceAssociationItem key={item.id} isLastItem={isLastItem} {...item} />;
            })}
          </div>
        )}
      </InfiniteScrollContainer>
    </>
  );
};

export default ShareExperienceAssociationListContainer;
