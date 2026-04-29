import { SocialActions } from '@repo/core/components/ShareExperience';

import useLikes from './__hooks__/likeHandlers/useLikes';
import useShareExperienceBookmark from './__hooks__/useShareExperienceBookmark';
import { ShareExperienceBottomPartProps } from './types';

const ShareExperienceBottomPart = (props: ShareExperienceBottomPartProps) => {
  const { isBookmarked, toggleBookmarkHandler } = useShareExperienceBookmark(props);
  const { likeHandler } = useLikes(props);

  return (
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
  );
};

export default ShareExperienceBottomPart;
