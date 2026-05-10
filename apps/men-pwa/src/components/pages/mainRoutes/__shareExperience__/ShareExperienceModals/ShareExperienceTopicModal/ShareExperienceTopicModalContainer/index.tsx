import { useRef } from 'react';

import { NewPostLink, SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';
import { useOverflowHandler } from '@repo/core/hooks/useOverflowHandler';

import ShareExperiencePostCardModules from '../../../ShareExperienceModules/ShareExperiencePostCardModules';
import ShareExperienceTopicModalContainerLayout from './ShareExperienceTopicModalContainerLayout';
import useGetData from './__hooks__/useGetData';
import useScroll from './__hooks__/useScroll';
import { ShareExperienceTopicModalContainerPropsType } from './type';

const ShareExperienceTopicModalContainer = ({
  avatarImage,

  topicId,
}: ShareExperienceTopicModalContainerPropsType) => {
  useOverflowHandler(topicId !== null);
  const { topicExperiencesData, isLoading, pageNo, updatePageNo, apiLoading } = useGetData({
    topicId: topicId || '',
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
          {topicExperiencesData?.expirences.map((item) => (
            <ShareExperiencePostCardModules
              key={item.id}
              {...item}
              type="topic"
              shareId={item.id}
              hasLinkTo={true}
              isSelf={item.selfExperience}
              className="bg-impo_Neutral_Background border-b  border-b-impo_Neutral_Surface px-4"
            />
          ))}
        </InfiniteScrollContainer>

        {!isLoading && (
          <NewPostLink
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
