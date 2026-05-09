import { BookmarkButton, CommentsCountLink, ReportButtonModule } from '@repo/core/components/shareExperience';

import ShareExperienceLikesModule from '@components/pages/mainRoutes/__shareExperience__/ShareExperienceModules/ShareExperienceLikesModule';
import useShareExperienceBookmark from '@components/pages/mainRoutes/__shareExperience__/ShareExperienceModules/ShareExperiencePostCardModules/__hooks__/useShareExperienceBookmark';

import { CommentsBottomPartProps } from './types';

const CommentsBottomPart = (props: CommentsBottomPartProps) => {
  const { isBookmarked, toggleBookmarkHandler } = useShareExperienceBookmark(props);
  return (
    <div className="w-full flex items-center justify-between">
      {!props.self && <ReportButtonModule id={props.id} />}

      {!props.self && <BookmarkButton isBookmarked={isBookmarked} toggleBookmarkHandler={toggleBookmarkHandler} />}

      <CommentsCountLink isSelf={true} commentCount={props.commentCount} id={props.id} />

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
