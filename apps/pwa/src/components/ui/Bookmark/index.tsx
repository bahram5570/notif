import BookmarkEmptyIcon from '@assets/icons/saveEmpty.svg';
import BookmarkFillIcon from '@assets/icons/saveFill.svg';

import { BookmarkPropsType } from './type';

const Bookmark = ({ clickHandler, isBookmarked, id }: BookmarkPropsType) => {
  return (
    <div className="w-8 h-8  flex items-center justify-center  pointer-events-auto" onClick={clickHandler} id={id}>
      {!isBookmarked && <BookmarkEmptyIcon className="w-5 h-auto stroke-impo_Surface_InverseSurface" />}
      {isBookmarked && <BookmarkFillIcon className="w-5 h-auto fill-impo_Surface_InverseSurface" />}
    </div>
  );
};

export default Bookmark;
