import { DeletePostModule, ReportButtonModule } from '@repo/core/components/ShareExperience';

import ShareExperienceLikesModule from '@components/pages/mainRoutes/__shareExperience__/ShareExperienceModules/ShareExperienceLikesModule';

import ReplyBtn from './ReplyBtn';
import { CommentsGeneratorBottomPartProps } from './types';

const CommentsGeneratorBottomPart = (props: CommentsGeneratorBottomPartProps) => {
  return (
    <div className="w-full flex items-center justify-between py-4">
      {props.selfComment && <DeletePostModule type="comment" shareId={props.id} commentId={props.shareId} />}

      {!props.selfComment && <ReportButtonModule id={props.id} />}

      <ShareExperienceLikesModule
        likeCount={props.likeCount}
        isSelf={props.selfComment}
        disliked={props.disliked}
        commentId={props.shareId}
        state={props.state}
        shareId={props.id}
        type="comment"
      />
      {props.canSendComment && (
        <ReplyBtn
          commentId={props.shareId}
          userId={props.userId}
          avatar={props.avatar}
          shareId={props.id}
          name={props.name}
        />
      )}
    </div>
  );
};

export default CommentsGeneratorBottomPart;
