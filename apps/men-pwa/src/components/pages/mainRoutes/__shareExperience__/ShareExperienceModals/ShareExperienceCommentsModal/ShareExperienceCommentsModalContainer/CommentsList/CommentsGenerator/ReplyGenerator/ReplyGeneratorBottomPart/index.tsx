import { DeletePostModule, ReportButtonModule } from '@repo/core/components/ShareExperience';

import ShareExperienceLikesModule from '@components/pages/mainRoutes/__shareExperience__/ShareExperienceModules/ShareExperienceLikesModule';

import { ReplyGeneratorBottomPartProps } from './types';

const ReplyGeneratorBottomPart = (props: ReplyGeneratorBottomPartProps) => {
  return (
    <div className="w-full flex items-center gap-6 pb-4">
      {props.selfExperience && (
        <DeletePostModule commentId={props.commentId} shareId={props.shareId} replyId={props.id} type="reply" />
      )}

      {!props.selfExperience && <ReportButtonModule id={props.shareId} />}

      <ShareExperienceLikesModule
        isSelf={props.selfExperience}
        likeCount={props.likeCount}
        commentId={props.commentId}
        disliked={props.disliked}
        shareId={props.shareId}
        replyId={props.id}
        state={props.state}
        type="reply"
      />
    </div>
  );
};

export default ReplyGeneratorBottomPart;
