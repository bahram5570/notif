import SaveEmptyIcon from '@assets/icons/saveEmpty.svg';
import SaveFillIcon from '@assets/icons/saveFill.svg';

import useAnalytics from '@hooks/useAnalytics';
import useTheme from '@hooks/useTheme';

import useShareExperienceBookmark from './__hooks__/useShareExperienceBookmark';
import { ShareExperienceBookmarkModuleProps } from './types';

const ShareExperienceBookmarkModule = (props: ShareExperienceBookmarkModuleProps) => {
  const { callEvent } = useAnalytics();
  const { colors } = useTheme();
  const { isBookmarked, toggleBookmarkHandler } = useShareExperienceBookmark(props);

  const clickHandler = () => {
    toggleBookmarkHandler();
    callEvent('shareExperienceBookmarked');
  };

  return (
    <div className="w-10 flex justify-center" onClick={clickHandler}>
      {isBookmarked ? (
        <SaveFillIcon className="w-5" style={{ fill: colors.Surface_InverseSurface }} />
      ) : (
        <SaveEmptyIcon className="w-5" style={{ stroke: colors.Surface_InverseSurface }} />
      )}
    </div>
  );
};

export default ShareExperienceBookmarkModule;
