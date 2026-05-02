import { ContentsSectionModule, SocialActions } from '@repo/core/components/ShareExperience';

import ShareExperienceTopPart from '../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceTopPart';
import useLikes from './__hooks__/likeHandlers/useLikes';
import useShareExperienceBookmark from './__hooks__/useShareExperienceBookmark';
import { ShareExperiencePostCardModulesProps } from './type';

const ShareExperiencePostCardModules = (props: ShareExperiencePostCardModulesProps) => {
  const { isBookmarked, toggleBookmarkHandler } = useShareExperienceBookmark(props);
  const { likeHandler } = useLikes(props);

  return (
    <div className={`w-full  pt-5 pb-4 ${props.className}`}>
      <ShareExperienceTopPart {...props} selfExperience={props.isSelf} />
      <div className="w-full pr-10">
        <ContentsSectionModule
          isSelf={false}
          image={props.image}
          text={props.text}
          hasLinkTo={true}
          id={props.id}
          tags={props.tags}
        />

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
      </div>
    </div>
  );
};

export default ShareExperiencePostCardModules;
