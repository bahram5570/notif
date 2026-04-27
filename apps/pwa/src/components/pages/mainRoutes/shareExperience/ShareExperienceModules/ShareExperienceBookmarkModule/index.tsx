import { BookmarkButton } from '@repo/core/components/ShareExperience';

import useShareExperienceBookmark from './__hooks__/useShareExperienceBookmark';
import { ShareExperienceBookmarkModuleProps } from './types';

const ShareExperienceBookmarkModule = (props: ShareExperienceBookmarkModuleProps) => {
  const { isBookmarked, toggleBookmarkHandler } = useShareExperienceBookmark(props);

  return <BookmarkButton isBookmarked={isBookmarked} toggleBookmarkHandler={toggleBookmarkHandler} />;
};

export default ShareExperienceBookmarkModule;
