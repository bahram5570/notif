import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { FOOTER_HEIGTH } from '@repo/core/constants/app.constants';

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
import ShareExperienceReportModal from '../../ShareExperienceModals/ShareExperienceReportModal';
import ShareExperienceTopicModal from '../../ShareExperienceModals/ShareExperienceTopicModal';
import ShareExperienceUnfollowModal from '../../ShareExperienceModals/ShareExperienceUnfollowModal';
import ShareExperienceContentsModule from '../../ShareExperienceModules/ShareExperienceContentsModule';
import ShareExperienceBottomPart from './ShareExperienceBottomPart';
import ShareExperienceTopPart from './ShareExperienceTopPart';
import useExperiences from './__hooks__/useExperiences';
import useShareExperienceOrders from './__hooks__/useShareExperienceOrders';
import { ShareExperienceExperiencesProps } from './types';

const ShareExperienceExperiences = ({
  onSuccessNewHandler,
  selectedCategoryId,
  profile,
}: ShareExperienceExperiencesProps) => {
  const { shareExperienceOrdersList } = useShareExperienceOrders();
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
          <ShareExperienceCommentsModal shareExperienceOrdersList={shareExperienceOrdersList} />
          <ShareExperienceUnfollowModal />
          <ShareExperienceNewReplyModal />
          <ShareExperienceReportModal />
          <ShareExperienceDeleteModal />
          <ShareExperienceTopicModal avatarImage={profile.avatarImage} />
          <ShareExperienceProfileModal shareExperienceOrdersList={shareExperienceOrdersList} />
          <ShareExperienceChangeAvatarModal />
          <ShareExperienceDefultAvatarListModal />
          <ShareExperienceEditProfileModal />
          <ShareExperienceFollowerModal shareExperienceOrdersList={shareExperienceOrdersList} />
          <ShareExperienceFollowingModal shareExperienceOrdersList={shareExperienceOrdersList} />
        </>
      )}

      <InfiniteScrollContainer
        pageNo={pageNo}
        height={'100dvh'}
        isLoading={isLoading}
        totalCount={totalCount}
        callBack={updatePageNo}
        className="flex flex-col px-4 relative"
        style={{ paddingBottom: FOOTER_HEIGTH * 2 }}
      >
        {experiencesData?.expirences.map((item, index) => (
          <div key={index} className="w-full border-t-[1px] border-t-impo_Neutral_Surface  pt-5 pb-4 z-0">
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
        ))}
      </InfiniteScrollContainer>
    </>
  );
};

export default ShareExperienceExperiences;
