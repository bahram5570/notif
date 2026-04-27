import { CommentsCountLink, DeletePostModule, ReportButtonModule } from '@repo/core/components/ShareExperience';

import ShareExperienceBookmarkModule from '../../../ShareExperienceModules/ShareExperienceBookmarkModule';
import ShareExperienceLikesModule from '../../../ShareExperienceModules/ShareExperienceLikesModule';
import { ShareExperienceBottomPartProps } from './types';

const ShareExperienceBottomPart = (props: ShareExperienceBottomPartProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      {!props.selfExperience && <ReportButtonModule id={props.id} />}

      {props.selfExperience && <DeletePostModule type="experience" shareId={props.id} />}

      {!props.selfExperience && <ShareExperienceBookmarkModule id={props.id} isBookmarked={props.isBookmarked} />}

      <CommentsCountLink isSelf={false} commentCount={props.commentCount} id={props.id} />

      <ShareExperienceLikesModule
        type="experience"
        shareId={props.id}
        state={props.state}
        disliked={props.disliked}
        likeCount={props.likeCount}
        isSelf={props.selfExperience}
      />
    </div>
  );
};

export default ShareExperienceBottomPart;
