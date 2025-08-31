import { useEffect, useState } from 'react';

import BookmarkEmptyIcon from '@assets/icons/saveEmpty.svg';
import BookmarkFillIcon from '@assets/icons/saveFill.svg';

import useApi from '@hooks/useApi';
import useTheme from '@hooks/useTheme';

import { RoutinBookmarkedPropsType } from './type';

const RoutinBookmarked = (props: RoutinBookmarkedPropsType) => {
  const { colors } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
  const [apiInfo, setApiInfo] = useState<string | null>(null);

  const clickHandler = () => {
    if (isBookmarked) {
      setIsBookmarked(false);
      setApiInfo('widgets/program/unbookmark');
    } else {
      setIsBookmarked(true);
      setApiInfo('widgets/program/bookmark');
    }
  };

  const { callApi } = useApi({ api: apiInfo || '', method: 'PUT' });

  useEffect(() => {
    if (apiInfo) {
      setApiInfo(null);
      const payload = { programId: props.programId };
      callApi(payload);
    }
  }, [apiInfo]);

  useEffect(() => {
    setIsBookmarked(props.isBookmarked);
  }, [props.isBookmarked]);

  return (
    <div
      className="w-8 h-8  flex items-center justify-center  pointer-events-auto"
      onClick={(e) => {
        e.stopPropagation();
        clickHandler();
      }}
    >
      {!isBookmarked && <BookmarkEmptyIcon className="w-5 h-auto" style={{ stroke: colors.Surface_InverseSurface }} />}
      {isBookmarked && <BookmarkFillIcon className="w-5 h-auto" style={{ fill: colors.Surface_InverseSurface }} />}
    </div>
  );
};

export default RoutinBookmarked;
