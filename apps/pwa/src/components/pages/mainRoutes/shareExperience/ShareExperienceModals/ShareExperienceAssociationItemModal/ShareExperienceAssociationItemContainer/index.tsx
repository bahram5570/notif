import { InfiniteList } from '@repo/core/components/InfiniteList';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';

import ShareExperienceNewLink from '../../../ShareExperienceContainer/ShareExperienceNewLink';
import ShareExperiencePostCardModules from '../../../ShareExperienceModules/ShareExperiencePostCardModules';
import EmptyState from './EmptyState';
import ShareExperienceAssociationItemHeader from './ShareExperienceAssociationItemHeader';
import useGetAssociationInfo from './__hooks__/useGetAssociationInfo';
import useGetAssociationItemData from './__hooks__/useGetAssociationItemData';
import useScroll from './__hooks__/useScroll';
import { ShareExperienceAssociationItemContainerPropsType } from './type';

const ShareExperienceAssociationItemContainer = ({
  AssociationId,
}: ShareExperienceAssociationItemContainerPropsType) => {
  const { isScrolled, scrollRef } = useScroll();
  const { associationExperienceList, experiencesLoading, updateList, loading } = useGetAssociationItemData({
    AssociationId,
  });
  const { associationInfoData, isLoading } = useGetAssociationInfo({ associationId: AssociationId });

  const hasExperienceList = associationExperienceList && associationExperienceList.experiences.length > 0;

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto">
      {isLoading && (
        <div className="flex flex-col justify-center items-center h-full w-full">
          <CustomSpinner size={30} className="border-impo_Primary_Primary" />
        </div>
      )}
      {associationInfoData && !isLoading && (
        <>
          <ShareExperienceNewLink
            associationId={AssociationId}
            fromAssociationSection={true}
            isFollowed={associationInfoData.isFollowed}
          />
          <ShareExperienceAssociationItemHeader
            isScrolled={isScrolled}
            {...associationInfoData}
            associationId={AssociationId || ''}
          />
          <div style={{ paddingTop: isScrolled ? '80px' : '220px' }}>
            {!hasExperienceList && !experiencesLoading && <EmptyState associationName={associationInfoData.title} />}
            {hasExperienceList && (
              <div className="flex-1 overflow-y-auto px-4" style={{ paddingBottom: FOOTER_HEIGHT }}>
                <InfiniteList
                  parentRef={scrollRef}
                  list={associationExperienceList?.experiences}
                  pagination={{
                    pageNo: undefined,
                    isLoading: loading,
                    callPagination: updateList,
                    pageSize: undefined,
                    totalCount: undefined,
                  }}
                  renderItem={(item, index) => (
                    <ShareExperiencePostCardModules
                      key={item.id}
                      {...item}
                      type="association"
                      shareId={item.id}
                      hasLinkTo={true}
                      isSelf={item.selfExperience}
                      className={` ${index !== 0 && 'border-t-[1px] border-t-impo_Neutral_Surface'}`}
                    />
                  )}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ShareExperienceAssociationItemContainer;
