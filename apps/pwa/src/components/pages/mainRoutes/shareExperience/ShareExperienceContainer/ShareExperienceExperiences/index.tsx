import { Fragment } from 'react';

import { InfiniteList } from '@repo/core/components/InfiniteList';
import { EXPERIENCES_PAGE_SIZE } from '@repo/core/components/ShareExperience';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

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
import ShareExperiencePostCardModules from '../../ShareExperienceModules/ShareExperiencePostCardModules';
import ShareExperienceAssociation from '../ShareExperienceAssociation';
import useExperiences from './__hooks__/useExperiences';
import { ShareExperienceExperiencesProps } from './types';

const ShareExperienceExperiences = ({
  associationSectionTitle,
  onSuccessNewHandler,
  selectedCategoryId,
  showAssociation,
  associations,
  scrollRef,
  profile,
}: ShareExperienceExperiencesProps) => {
  const { isLoading, experiencesData, pageNo, totalCount, updatePageNo } = useExperiences(selectedCategoryId);

  return (
    <>
      {isLoading && experiencesData === undefined && (
        <div className="w-full flex justify-center items-end p-4">
          <CustomSpinner size={40} className="border-impo_Surface_Outline" />
        </div>
      )}

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

      {experiencesData?.expirences && (
        <InfiniteList
          parentRef={scrollRef}
          list={experiencesData?.expirences}
          pagination={{
            pageNo,
            isLoading,
            totalCount,
            callPagination: updatePageNo,
            pageSize: EXPERIENCES_PAGE_SIZE,
          }}
          renderItem={(item, index) => (
            <Fragment key={index}>
              {index === 1 && showAssociation && associations.length > 0 && (
                <ShareExperienceAssociation
                  associations={associations}
                  associationSectionTitle={associationSectionTitle}
                />
              )}

              <ShareExperiencePostCardModules
                {...item}
                hasLinkTo={true}
                shareId={item.id}
                type="experiences"
                isSelf={item.selfExperience}
                className="border-t-[1px] border-t-impo_Neutral_Surface z-0 px-4"
              />
            </Fragment>
          )}
        />
      )}
    </>
  );
};

export default ShareExperienceExperiences;
