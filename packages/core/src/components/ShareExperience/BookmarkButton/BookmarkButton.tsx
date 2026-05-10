import SaveEmptyIcon from '@assets/shared/icons/saveEmpty.svg';
import SaveFillIcon from '@assets/shared/icons/saveFill.svg';

import { useAnalytics } from '../../../hooks/useAnalytics';
import { BookmarkButtonProps } from './type';

export const BookmarkButton = (props: BookmarkButtonProps) => {
  const { callEvent } = useAnalytics();

  const clickHandler = () => {
    props.toggleBookmarkHandler();
    callEvent('shareExperienceBookmarked');
  };

  return (
    <div className="w-10 flex justify-center" onClick={clickHandler}>
      {props.isBookmarked ? (
        <SaveFillIcon className="w-5 fill-impo_Surface_InverseSurface" />
      ) : (
        <SaveEmptyIcon className="w-5 stroke-impo_Surface_InverseSurface" />
      )}
    </div>
  );
};
