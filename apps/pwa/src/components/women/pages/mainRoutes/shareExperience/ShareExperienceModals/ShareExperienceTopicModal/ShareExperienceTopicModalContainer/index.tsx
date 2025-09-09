import styles from '../../../styles.module.css';

import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useOverflowHandler from '@hooks/useOverflowHandler';
import useTheme from '@hooks/useTheme';

import ShareExperienceBottomPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceBottomPart';
import ShareExperienceTopPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceTopPart';
import ShareExperienceContentsModule from '../../../ShareExperienceModules/ShareExperienceContentsModule';
import ShareExperienceNewCommentFooterModule from '../../../ShareExperienceModules/ShareExperienceNewCommentFooterModule';
import ShareExperienceTopicModalContainerLayout from './ShareExperienceTopicModalContainerLayout';
import useGetData from './__hooks__/useGetData';
import useScroll from './__hooks__/useScroll';
import { ShareExperienceTopicModalContainerPropsType } from './type';

const ShareExperienceTopicModalContainer = ({ topicId, avatarImage }: ShareExperienceTopicModalContainerPropsType) => {
  useOverflowHandler();
  const { topicExperiencesData, isLoading, pageNo, updatePageNo, apiLoading } = useGetData({
    topicId,
  });
  const { colors } = useTheme();
  const { scrolled } = useScroll({ id: 'infiniteScrollContainer' });

  return (
    <>
      <ShareExperienceTopicModalContainerLayout
        coverImage={topicExperiencesData?.coverImage}
        bio={topicExperiencesData?.bio}
        topicName={topicExperiencesData?.name}
        scrolled={scrolled}
        isLoading={isLoading}
      >
        <InfiniteScrollContainer
          isLoading={apiLoading}
          pageNo={pageNo}
          callBack={updatePageNo}
          totalCount={topicExperiencesData?.totalCount || 10}
          className={`max-h-screen pt-72 ${styles.scroller}`}
          style={{ paddingBottom: FOOTER_HEIGTH * 2 }}
        >
          {topicExperiencesData?.expirences.map((item, index) => (
            <div
              key={index}
              className="w-full border-t-[1px] pt-5 pb-4 px-4 z-20"
              style={{ borderTopColor: colors.Surface_SurfaceVariant, backgroundColor: colors.White }}
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
