import { FollowActionModule } from '@repo/core/components/ShareExperience';

import useShareExperienceFollow from '../../ShareExperienceModals/ShareExperienceUnfollowModal/__hooks__/useShareExperienceFollow';
import { ShareExperienceFollowModuleProps } from './types';

const ShareExperienceFollowModule = (props: ShareExperienceFollowModuleProps) => {
  const { followHandler, isFollowLoading } = useShareExperienceFollow(props.experienceId);

  return (
    <FollowActionModule
      isFollowLoading={isFollowLoading}
      followHandler={followHandler}
      userId={props.userId}
      experienceId={props.experienceId}
      isFollow={props.isFollow}
      name={props.name}
    />
  );
};

export default ShareExperienceFollowModule;
