import BookmarkEmptyIcon from '@assets/icons/saveEmpty.svg';
import BookmarkFillIcon from '@assets/icons/saveFill.svg';

import useTheme from '@hooks/useTheme';

import { BookmarkPropsType } from './type';

const Bookmark = ({ clickHandler, isBookmarked, id }: BookmarkPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="w-8 h-8  flex items-center justify-center  pointer-events-auto" onClick={clickHandler} id={id}>
      {!isBookmarked && <BookmarkEmptyIcon className="w-5 h-auto" style={{ stroke: colors.Surface_InverseSurface }} />}
      {isBookmarked && <BookmarkFillIcon className="w-5 h-auto" style={{ fill: colors.Surface_InverseSurface }} />}
    </div>
  );
};

export default Bookmark;
