import { LikeActionModule } from '@repo/core/components/ShareExperience';

import useLikes from './__hooks__/useLikes';
import { ShareExperienceLikesModuleProps } from './types';

const ShareExperienceLikesModule = (props: ShareExperienceLikesModuleProps) => {
  const { likeHandler } = useLikes(props);

  return (
    <LikeActionModule
      likeHandler={likeHandler}
      disliked={props.disliked}
      isSelf={props.isSelf}
      likeCount={props.likeCount}
      state={props.state}
    />
  );
};

export default ShareExperienceLikesModule;
