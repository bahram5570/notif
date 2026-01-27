import Dark_Typography from '@components/ui/Dark_Typography';

import CommentsGeneratorBottomPart from './CommentsGeneratorBottomPart';
import CommentsGeneratorTopPart from './CommentsGeneratorTopPart';
import ReplyGenerator from './ReplyGenerator';
import { CommentsGeneratorProps } from './types';

const CommentsGenerator = (props: CommentsGeneratorProps) => {
  return (
    <div
      className={`
                  w-full 
                  flex 
                  flex-col 
                  items-end 
                  pt-4 
                  border-t-[1px]
                  ${props.isFirstIndex ? 'border-t-impo_Transparent' : 'border-t-impo_Neutral_Surface'}
                `}
    >
      <CommentsGeneratorTopPart
        approvedProfile={props.approvedProfile}
        selfComment={props.selfComment}
        createTime={props.createTime}
        avatar={props.avatar}
        name={props.name}
        userId={props.userId}
      />

      <div className="w-full flex flex-col items-end pr-10 -translate-y-4">
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {props.text}
        </Dark_Typography>

        <CommentsGeneratorBottomPart
          selfComment={props.selfComment}
          likeCount={props.likeCount}
          disliked={props.disliked}
          userId={props.userId}
          avatar={props.avatar}
          state={props.state}
          shareId={props.id}
          id={props.shareId}
          name={props.name}
          CanSendReply={props.CanSendReply}
        />

        <ReplyGenerator
          repliesCount={props.repliesCount}
          commentName={props.name}
          shareId={props.shareId}
          replies={props.replies}
          commentId={props.id}
          userId={props.userId}
        />
      </div>
    </div>
  );
};

export default CommentsGenerator;
