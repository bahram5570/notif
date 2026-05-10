import BookmarkEmptyIcon from '@assets/shared/icons/saveEmpty.svg';
import BookmarkFillIcon from '@assets/shared/icons/saveFill.svg';

import { CustomBookmarkTypes } from './types';

export const CustomBookmark = ({ clickHandler, isBookmarked, id }: CustomBookmarkTypes) => {
  return (
    <div className="w-8 h-8 flex items-center justify-center pointer-events-auto" onClick={clickHandler} id={id}>
      {!isBookmarked && (
        <BookmarkEmptyIcon className="w-5 h-auto stroke-impo_Surface_InverseSurface dark:stroke-impo_Surface_InverseSurface" />
      )}

      {isBookmarked && (
        <BookmarkFillIcon className="w-5 h-auto fill-impo_Surface_InverseSurface dark:stroke-impo_Surface_InverseOnSurface" />
      )}
    </div>
  );
};
