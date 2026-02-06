import SaveEmptyIcon from '@assets/icons/saveEmpty.svg';
import SaveFillIcon from '@assets/icons/saveFill.svg';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import useShareExperienceBookmark from './__hooks__/useShareExperienceBookmark';
import { ShareExperienceBookmarkModuleProps } from './types';

const ShareExperienceBookmarkModule = (props: ShareExperienceBookmarkModuleProps) => {
  const { callEvent } = useAnalytics();
  const { isBookmarked, toggleBookmarkHandler } = useShareExperienceBookmark(props);

  const clickHandler = () => {
    toggleBookmarkHandler();
    callEvent('shareExperienceBookmarked');
  };

  return (
    <div className="w-10 flex justify-center" onClick={clickHandler}>
      {isBookmarked ? (
        <SaveFillIcon className="w-5 fill-impo_Surface_InverseSurface" />
      ) : (
        <SaveEmptyIcon className="w-5 stroke-impo_Surface_InverseSurface" />
      )}
    </div>
  );
};

export default ShareExperienceBookmarkModule;
