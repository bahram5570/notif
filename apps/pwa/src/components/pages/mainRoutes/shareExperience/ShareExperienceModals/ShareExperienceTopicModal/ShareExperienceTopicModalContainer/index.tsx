import { useRef } from 'react';

import { InfiniteList } from '@repo/core/components/InfiniteList';
import { NewPostLink, SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@repo/core/components/ShareExperience';

import { useOverflowHandler } from '@repo/core/hooks/useOverflowHandler';

import ShareExperiencePostCardModules from '../../../ShareExperienceModules/ShareExperiencePostCardModules';
import ShareExperienceTopicModalContainerLayout from './ShareExperienceTopicModalContainerLayout';
import useGetData from './__hooks__/useGetData';
import useScroll from './__hooks__/useScroll';
import { ShareExperienceTopicModalContainerPropsType } from './type';

const ShareExperienceTopicModalContainer = ({ avatarImage, topicId }: ShareExperienceTopicModalContainerPropsType) => {
  useOverflowHandler(topicId !== null);
  const { topicExperiencesData, isLoading, apiLoading, updateList } = useGetData({
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
        isLoading={apiLoading}
        scrolled={scrolled}
        scrollRef={scrollRef}
        markerRef={markerRef}
      >
        {topicExperiencesData?.expirences && (
          <InfiniteList
            parentRef={scrollRef}
            list={topicExperiencesData?.expirences}
            pagination={{
              isLoading: isLoading,
              callPagination: updateList,
            }}
            renderItem={(item) => (
              <ShareExperiencePostCardModules
                key={item.id}
                {...item}
                type="topic"
                hasLinkTo={true}
                shareId={item.id}
                isSelf={item.selfExperience}
                className="bg-impo_Neutral_Background border-b  border-b-impo_Neutral_Surface px-4"
              />
            )}
          />
        )}

        {!apiLoading && (
          <NewPostLink
            avatar={avatarImage || ''}
            placeholder={topicExperiencesData?.inputText || ''}
            queryName={SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME}
            queries={{ [SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME]: 'true' }}
          />
        )}
      </ShareExperienceTopicModalContainerLayout>
    </>
  );
};

export default ShareExperienceTopicModalContainer;
