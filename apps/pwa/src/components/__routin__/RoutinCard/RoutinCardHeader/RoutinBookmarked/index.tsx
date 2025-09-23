import { useEffect, useState } from 'react';

import Bookmark from '@components/ui/Bookmark';
import useApi from '@hooks/useApi';

import { RoutinBookmarkedPropsType } from './type';

const RoutinBookmarked = (props: RoutinBookmarkedPropsType) => {
  const [apiInfo, setApiInfo] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
  const { callApi } = useApi({ api: apiInfo || '', method: 'PUT' });

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

  return <Bookmark clickHandler={clickHandler} isBookmarked={isBookmarked} />;
};

export default RoutinBookmarked;
