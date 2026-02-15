import { useEffect, useRef, useState } from 'react';

import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { FOOTER_HEIGTH } from '@repo/core/constants/app.constants';

import ShareExperienceBottomPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceBottomPart';
import ShareExperienceTopPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceTopPart';
import ShareExperienceNewLink from '../../../ShareExperienceContainer/ShareExperienceNewLink';
import ShareExperienceContentsModule from '../../../ShareExperienceModules/ShareExperienceContentsModule';
import EmptyState from './EmptyState';
import ShareExperienceAssociationItemHeader from './ShareExperienceAssociationItemHeader';
import useGetAssociationItemData from './__hooks__/useGetAssociationItemData';
import { EXPERIENCE_DATA } from './constants';
import { ShareExperienceAssociationItemContainerPropsType } from './type';

const ShareExperienceAssociationItemContainer = ({
  AssociationId,
}: ShareExperienceAssociationItemContainerPropsType) => {
  const { isLoading, totalCount, pageNo, updatePageNo } = useGetAssociationItemData({ AssociationId });
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (el.scrollTop > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto">
      <ShareExperienceNewLink />

      <InfiniteScrollContainer
        pageNo={pageNo}
        isLoading={isLoading}
        scrollContainerRef={scrollRef}
        totalCount={totalCount}
        callBack={updatePageNo}
        className="flex-1 overflow-y-auto px-4"
        style={{ paddingBottom: FOOTER_HEIGTH }}
      >
        <ShareExperienceAssociationItemHeader isScrolled={isScrolled} />
        <div style={{ paddingTop: isScrolled ? '80px' : '220px' }}>
          {/* <EmptyState associationName="مامان اولی‌ها" /> */}
          {EXPERIENCE_DATA?.expirences.map((item, index) => {
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
    </div>
  );
};

export default ShareExperienceAssociationItemContainer;
