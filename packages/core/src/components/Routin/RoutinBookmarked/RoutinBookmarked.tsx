import { useEffect, useState } from 'react';

import { usePwaApi } from '../../../hooks/usePwaApi';
import { CustomBookmark } from '../../ui/CustomBookmark';
import { RoutinBookmarkedPropsType } from './types';

export const RoutinBookmarked = (props: RoutinBookmarkedPropsType) => {
  const [apiInfo, setApiInfo] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
  const { callApi } = usePwaApi({ api: apiInfo || '', method: 'PUT' });

  const clickHandler = (e?: React.MouseEvent<HTMLElement>) => {
    if (e) {
      e.stopPropagation();
    }
    if (isBookmarked) {
      setIsBookmarked(false);
      setApiInfo('widgets/program/unbookmark');
    } else {
      setIsBookmarked(true);
      setApiInfo('widgets/program/bookmark');
    }
  };

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

  return <CustomBookmark clickHandler={clickHandler} isBookmarked={isBookmarked} />;
};
