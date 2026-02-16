import { useEffect, useRef, useState } from 'react';

import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { FOOTER_HEIGTH } from '@repo/core/constants/app.constants';

import ShareExperienceBottomPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceBottomPart';
import ShareExperienceTopPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceTopPart';
import ShareExperienceNewLink from '../../../ShareExperienceContainer/ShareExperienceNewLink';
import ShareExperienceContentsModule from '../../../ShareExperienceModules/ShareExperienceContentsModule';
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
  const { associationExperienceList, pageNo, updatePageNo, experiencesLoading } = useGetAssociationItemData({
    AssociationId,
  });
  const { associationInfoData, isLoading } = useGetAssociationInfo({ associationId: AssociationId });

  const hasExperienceList = associationExperienceList && associationExperienceList.experiences.length > 0;

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto">
      {associationInfoData && !isLoading && (
        <>
          <ShareExperienceNewLink />
          <ShareExperienceAssociationItemHeader
            isScrolled={isScrolled}
            {...associationInfoData}
            associationId={AssociationId || ''}
          />
          <InfiniteScrollContainer
            pageNo={pageNo}
            isLoading={experiencesLoading}
            scrollContainerRef={scrollRef}
            totalCount={associationExperienceList?.totalCount || 10}
            callBack={updatePageNo}
            className="flex-1 overflow-y-auto px-4"
            style={{ paddingBottom: FOOTER_HEIGTH }}
          >
            <div style={{ paddingTop: isScrolled ? '80px' : '220px' }}>
              {!hasExperienceList && <EmptyState associationName={associationInfoData.title} />}

              {hasExperienceList &&
                associationExperienceList?.experiences.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-full ${index !== 0 && 'border-t-[1px] border-t-impo_Neutral_Surface'}   pt-5 pb-4 `}
                    >
                      <ShareExperienceTopPart {...item} />

                      <div className="w-full pr-10">
                        <ShareExperienceContentsModule
                          image={item.image}
                          text={item.text}
                          hasLinkTo={true}
                          isSelf={false}
                          id={item.id}
                        />

                        <ShareExperienceBottomPart {...item} />
                      </div>
                    </div>
                  );
                })}
            </div>
          </InfiniteScrollContainer>
        </>
      )}
    </div>
  );
};

export default ShareExperienceAssociationItemContainer;
