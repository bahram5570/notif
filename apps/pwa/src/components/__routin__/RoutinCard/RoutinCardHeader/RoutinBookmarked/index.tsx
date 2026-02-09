import { useEffect, useState } from 'react';

import { CustomBookmark } from '@repo/core/components/ui/CustomBookmark';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { RoutinBookmarkedPropsType } from './type';

const RoutinBookmarked = (props: RoutinBookmarkedPropsType) => {
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

export default RoutinBookmarked;
