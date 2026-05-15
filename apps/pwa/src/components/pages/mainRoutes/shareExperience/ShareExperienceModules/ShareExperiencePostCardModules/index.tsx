import { ContentsSectionModule, HeaderPostSection, SocialActions } from '@repo/core/components/ShareExperience';

import useShareExperienceFollow from '../../ShareExperienceModals/ShareExperienceUnfollowModal/__hooks__/useShareExperienceFollow';
import useLikes from './__hooks__/likeHandlers/useLikes';
import useShareExperienceBookmark from './__hooks__/useShareExperienceBookmark';
import { ShareExperiencePostCardModulesProps } from './type';

const ShareExperiencePostCardModules = (props: ShareExperiencePostCardModulesProps) => {
  const { isBookmarked, toggleBookmarkHandler } = useShareExperienceBookmark(props);
  const { followHandler, isFollowLoading } = useShareExperienceFollow(props.id);
  const { likeHandler } = useLikes(props);

  return (
    <div className={`w-full pt-5 pb-4 ${props.className}`}>
      <HeaderPostSection
        {...props}
        selfExperience={props.isSelf}
        isFollowLoading={isFollowLoading}
        followHandler={followHandler}
      />

      <div className="w-full pr-10">
        <ContentsSectionModule
          image={props.image}
          text={props.text}
          hasLinkTo={props.hasLinkTo}
          id={props.id}
          tags={props.tags}
        />

        <SocialActions
          commentCount={props.commentCount}
          disliked={props.disliked}
          id={props.id}
          isBookmarked={isBookmarked}
          likeCount={props.likeCount}
          selfExperience={props.selfExperience}
          state={props.state}
          likeHandler={likeHandler}
          toggleBookmarkHandler={toggleBookmarkHandler}
        />
      </div>
    </div>
  );
};

export default ShareExperiencePostCardModules;
