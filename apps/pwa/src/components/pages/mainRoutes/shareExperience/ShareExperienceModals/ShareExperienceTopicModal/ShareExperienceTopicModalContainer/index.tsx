import { useRef } from 'react';

import {
  ContentsSectionModule,
  SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME,
} from '@repo/core/components/ShareExperience';
import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';
import { useOverflowHandler } from '@repo/core/hooks/useOverflowHandler';

import ShareExperienceBottomPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceBottomPart';
import ShareExperienceTopPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceTopPart';
import ShareExperienceNewCommentFooterModule from '../../../ShareExperienceModules/ShareExperienceNewCommentFooterModule';
import ShareExperienceTopicModalContainerLayout from './ShareExperienceTopicModalContainerLayout';
import useGetData from './__hooks__/useGetData';
import useScroll from './__hooks__/useScroll';
import { ShareExperienceTopicModalContainerPropsType } from './type';

const ShareExperienceTopicModalContainer = ({
  avatarImage,
  queryParam,
  topicId,
}: ShareExperienceTopicModalContainerPropsType) => {
  useOverflowHandler(queryParam !== null);
  const { topicExperiencesData, isLoading, pageNo, updatePageNo, apiLoading } = useGetData({
    topicId,
  });

  const markerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrolled } = useScroll({ ref: markerRef, root: scrollRef });

  return (
    <>
      <ShareExperienceTopicModalContainerLayout
        coverImage={topicExperiencesData?.coverImage}
        topicName={topicExperiencesData?.name}
        bio={topicExperiencesData?.bio}
        isLoading={isLoading}
        scrolled={scrolled}
        scrollRef={scrollRef}
        markerRef={markerRef}
      >
        <InfiniteScrollContainer
          pageNo={pageNo}
          isLoading={apiLoading}
          scrollContainerRef={scrollRef}
          callBack={updatePageNo}
          totalCount={topicExperiencesData?.totalCount || 0}
          style={{ paddingBottom: FOOTER_HEIGHT * 2 }}
        >
          {topicExperiencesData?.expirences.map((item, index) => (
            <div
              key={index}
              className="w-full px-4 pt-5 pb-4 bg-impo_Neutral_Background border-b  border-b-impo_Neutral_Surface"
            >
              <ShareExperienceTopPart {...item} />

              <div className="w-full pr-10">
                <ContentsSectionModule
                  isSelf={item.selfExperience}
                  image={item.image}
                  text={item.text}
                  hasLinkTo
                  id={item.id}
                  tags={item.tags}
                />

                <ShareExperienceBottomPart {...item} type="experience" shareId={item.id} />
              </div>
            </div>
          ))}
        </InfiniteScrollContainer>

        {!isLoading && (
          <ShareExperienceNewCommentFooterModule
            queries={{ [SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME]: 'true' }}
            placeholder={topicExperiencesData?.inputText || ''}
            avatar={avatarImage || ''}
            queryName={SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME}
          />
        )}
      </ShareExperienceTopicModalContainerLayout>
    </>
  );
};

export default ShareExperienceTopicModalContainer;
