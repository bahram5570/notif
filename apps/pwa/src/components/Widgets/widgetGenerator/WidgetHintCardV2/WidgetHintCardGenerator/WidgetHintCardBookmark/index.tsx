import { useEffect, useState } from 'react';

import Bookmark from '@components/ui/Bookmark';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ApiInfoTypes, WidgetHintCardBookmarkProps } from './types';

const WidgetHintCardBookmark = (props: WidgetHintCardBookmarkProps) => {
  const { callEvent } = useAnalytics();

  const [apiInfo, setApiInfo] = useState<ApiInfoTypes>(null);
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);

  const clickHandler = () => {
    callEvent('hintBookMarked');
    if (isBookmarked) {
      setIsBookmarked(false);
      setApiInfo({ api: 'archive/hint/bookmark', payload: { id: props.id }, method: 'DELETE' });
    } else {
      setIsBookmarked(true);
      setApiInfo({ api: 'archive/hint/bookmark', payload: { id: props.id }, method: 'POST' });
    }
  };

  const { callApi } = usePwaApi({ api: apiInfo?.api || '', method: apiInfo?.method || 'DELETE' });

  useEffect(() => {
    if (apiInfo) {
      setApiInfo(null);
      callApi({ ...apiInfo.payload });
    }
  }, [apiInfo]);

  return <Bookmark id="hintBookMarked" clickHandler={clickHandler} isBookmarked={isBookmarked} />;
};

export default WidgetHintCardBookmark;
