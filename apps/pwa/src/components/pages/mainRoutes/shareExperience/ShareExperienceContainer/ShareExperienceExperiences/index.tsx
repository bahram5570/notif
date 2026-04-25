import { Fragment } from 'react';

import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';

import ShareExperienceAssociationItemModal from '../../ShareExperienceModals/ShareExperienceAssociationItemModal';
import ShareExperienceAssociationListModal from '../../ShareExperienceModals/ShareExperienceAssociationListModal';
import ShareExperienceChangeAvatarModal from '../../ShareExperienceModals/ShareExperienceChangeAvatarModal';
import ShareExperienceCommentsModal from '../../ShareExperienceModals/ShareExperienceCommentsModal';
import ShareExperienceDefultAvatarListModal from '../../ShareExperienceModals/ShareExperienceDefultAvatarListModal';
import ShareExperienceDeleteModal from '../../ShareExperienceModals/ShareExperienceDeleteModal';
import ShareExperienceEditProfileModal from '../../ShareExperienceModals/ShareExperienceEditProfileModal';
import ShareExperienceFollowerModal from '../../ShareExperienceModals/ShareExperienceFollower';
import ShareExperienceFollowingModal from '../../ShareExperienceModals/ShareExperienceFollowing';
import ShareExperienceNewExerciseModal from '../../ShareExperienceModals/ShareExperienceNewExerciseModal';
import ShareExperienceNewReplyModal from '../../ShareExperienceModals/ShareExperienceNewReplyModal';
import ShareExperienceProfileModal from '../../ShareExperienceModals/ShareExperienceProfileModal';
import ShareExperienceProfileReportModal from '../../ShareExperienceModals/ShareExperienceProfileReportModal';
import ShareExperienceReportModal from '../../ShareExperienceModals/ShareExperienceReportModal';
import ShareExperienceTopicModal from '../../ShareExperienceModals/ShareExperienceTopicModal';
import ShareExperienceUnfollowModal from '../../ShareExperienceModals/ShareExperienceUnfollowModal';
import ShareExperienceContentsModule from '../../ShareExperienceModules/ShareExperienceContentsModule';
import ShareExperienceAssociation from '../ShareExperienceAssociation';
import ShareExperienceBottomPart from './ShareExperienceBottomPart';
import ShareExperienceInView from './ShareExperienceInView';
import ShareExperienceTopPart from './ShareExperienceTopPart';
import useExperiences from './__hooks__/useExperiences';
import { ShareExperienceExperiencesProps } from './types';

const ShareExperienceExperiences = ({
  onSuccessNewHandler,
  selectedCategoryId,
  profile,
  scrollRef,
  showAssociation,
  associationSectionTitle,
  associations,
}: ShareExperienceExperiencesProps) => {
  const { isLoading, experiencesData, pageNo, totalCount, updatePageNo } = useExperiences(selectedCategoryId);

  return (
    <>
      {!isLoading && experiencesData && (
        <>
          <ShareExperienceNewExerciseModal
            onSuccessNewHandler={onSuccessNewHandler}
            avatarImage={profile.avatarImage}
            username={profile.username}
          />
          <ShareExperienceCommentsModal avatarImage={profile.avatarImage} />
          <ShareExperienceUnfollowModal />
          <ShareExperienceNewReplyModal avatarImage={profile.avatarImage} username={profile.username} />
          <ShareExperienceReportModal />
          <ShareExperienceDeleteModal />
          <ShareExperienceTopicModal avatarImage={profile.avatarImage} />
          <ShareExperienceProfileModal />
          <ShareExperienceChangeAvatarModal />
          <ShareExperienceDefultAvatarListModal />
          <ShareExperienceEditProfileModal />
          <ShareExperienceFollowerModal />
          <ShareExperienceFollowingModal />
          <ShareExperienceAssociationListModal />
          <ShareExperienceAssociationItemModal />
          <ShareExperienceProfileReportModal />
        </>
      )}

      <InfiniteScrollContainer
        pageNo={pageNo}
        isLoading={isLoading}
        totalCount={totalCount}
        callBack={updatePageNo}
        scrollContainerRef={scrollRef}
        className="flex flex-col relative"
        style={{ paddingBottom: FOOTER_HEIGHT * 2 }}
      >
        {experiencesData?.expirences.map((item, index) => {
          return (
            <Fragment key={index}>
              {index === 1 && showAssociation && associations.length > 0 && (
                <ShareExperienceAssociation
                  associationSectionTitle={associationSectionTitle}
                  associations={associations}
                />
              )}

              <ShareExperienceInView>
                <div className="w-full border-t-[1px] border-t-impo_Neutral_Surface  pt-5 pb-4 z-0 px-4">
                  <ShareExperienceTopPart {...item} />

                  <div className="w-full pr-10">
                    <ShareExperienceContentsModule
                      image={item.image}
                      text={item.text}
                      hasLinkTo={true}
                      tags={item.tags}
                      isSelf={false}
                      id={item.id}
                    />

                    <ShareExperienceBottomPart {...item} />
                  </div>
                </div>
              </ShareExperienceInView>
            </Fragment>
          );
        })}
      </InfiniteScrollContainer>
    </>
  );
};

export default ShareExperienceExperiences;
