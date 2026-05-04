import { BookmarkButton } from '../BookmarkButton/BookmarkButton';
import { CommentsCountLink } from '../CommentsCountLink/CommentsCountLink';
import { DeletePostModule } from '../DeletePostModule/DeletePostModule';
import { LikeActionModule } from '../LikeActionModule/LikeActionModule';
import { ReportButtonModule } from '../ReportButtonModule/ReportButtonModule';
import { SocialActionsProps } from './type';

export const SocialActions = (props: SocialActionsProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      {!props.selfExperience && <ReportButtonModule id={props.id} />}

      {props.selfExperience && <DeletePostModule type="experience" shareId={props.id} />}

      {!props.selfExperience && (
        <BookmarkButton isBookmarked={props.isBookmarked} toggleBookmarkHandler={props.toggleBookmarkHandler} />
      )}

      <CommentsCountLink isSelf={false} commentCount={props.commentCount} id={props.id} />

      <LikeActionModule
        likeHandler={props.likeHandler}
        disliked={props.disliked}
        isSelf={props.selfExperience}
        likeCount={props.likeCount}
        state={props.state}
      />
    </div>
  );
};
