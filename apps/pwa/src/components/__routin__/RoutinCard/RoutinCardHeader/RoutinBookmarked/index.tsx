import BookmarkEmptyIcon from '@assets/icons/saveEmpty.svg';
import BookmarkFillIcon from '@assets/icons/saveFill.svg';

import useTheme from '@hooks/useTheme';

import { RoutinBookmarkedPropsType } from './type';

const RoutinBookmarked = ({ isBookmarked }: RoutinBookmarkedPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="w-8 h-8  flex items-center justify-center ">
      {!isBookmarked && <BookmarkEmptyIcon className="w-5 h-auto" style={{ stroke: colors.Surface_InverseSurface }} />}
      {isBookmarked && <BookmarkFillIcon className="w-5 h-auto" style={{ fill: colors.Surface_InverseSurface }} />}
    </div>
  );
};

export default RoutinBookmarked;
