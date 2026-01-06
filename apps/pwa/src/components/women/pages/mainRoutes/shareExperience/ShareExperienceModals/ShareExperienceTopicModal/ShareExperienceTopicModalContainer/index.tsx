import { useRef } from 'react';

import styles from '../../../styles.module.css';

import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useOverflowHandler from '@hooks/useOverflowHandler';

import ShareExperienceBottomPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceBottomPart';
import ShareExperienceTopPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceTopPart';
import ShareExperienceContentsModule from '../../../ShareExperienceModules/ShareExperienceContentsModule';
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
  const { scrolled } = useScroll({ ref: markerRef });

  return (
    <>
      <ShareExperienceTopicModalContainerLayout
        coverImage={topicExperiencesData?.coverImage}
        topicName={topicExperiencesData?.name}
        bio={topicExperiencesData?.bio}
        isLoading={isLoading}
        scrolled={scrolled}
      >
        <InfiniteScrollContainer
          pageNo={pageNo}
          isLoading={apiLoading}
          callBack={updatePageNo}
          style={{ paddingBottom: FOOTER_HEIGTH * 2 }}
          totalCount={topicExperiencesData?.totalCount || 10}
          className={`max-h-screen pt-72 ${styles.scroller} overflow-y-auto`}
        >
          <>
            <div ref={markerRef} style={{ height: 1, width: '100%' }} />
            {topicExperiencesData?.expirences.map((item, index) => (
              <div
                key={index}
                className="w-full px-4 pt-5 pb-4 bg-impo_Neutral_Background border-t-[1px] border-t-impo_Surface_SurfaceVariant z-20"
              >
                <ShareExperienceTopPart {...item} />

                <div className="w-full pr-10">
                  <ShareExperienceContentsModule
                    isSelf={item.selfExperience}
                    image={item.image}
                    text={item.text}
                    hasLinkTo={true}
                    id={item.id}
                  />

                  <ShareExperienceBottomPart {...item} />
                </div>
              </div>
            ))}
          </>
        </InfiniteScrollContainer>

        {!isLoading && (
          <ShareExperienceNewCommentFooterModule
            queries={{ [SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME]: 'true' }}
            placeholder={topicExperiencesData?.inputText || ''}
            avatar={avatarImage || ''}
          />
        )}
      </ShareExperienceTopicModalContainerLayout>
    </>
  );
};

export default ShareExperienceTopicModalContainer;
