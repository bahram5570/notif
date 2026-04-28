import { CommentsCountLink, ReportButtonModule } from '@repo/core/components/shareExperience';

import ShareExperienceLikesModule from '../../../../ShareExperienceModules/ShareExperienceLikesModule';
import { CommentsBottomPartProps } from './types';

const CommentsBottomPart = (props: CommentsBottomPartProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      {!props.self && <ReportButtonModule id={props.id} />}

      {/* {!props.self && <ShareExperienceBookmarkModule id={props.id} isBookmarked={props.isBookmarked} />} */}

      {/* <CommentsCountLink isSelf={true} commentCount={props.commentCount} id={props.id} /> */}

      <ShareExperienceLikesModule
        type="experience"
        shareId={props.id}
        state={props.state}
        disliked={props.dislikeCount}
        likeCount={props.likeCount}
        isSelf={props.self}
      />
    </div>
  );
};

export default CommentsBottomPart;
