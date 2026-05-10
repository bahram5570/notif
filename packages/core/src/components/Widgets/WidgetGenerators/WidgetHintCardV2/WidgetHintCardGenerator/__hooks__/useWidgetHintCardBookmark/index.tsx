import { useEffect, useState } from 'react';

import { useAnalytics } from '../../../../../../../hooks/useAnalytics';
import { usePwaApi } from '../../../../../../../hooks/usePwaApi';
import { UseWidgetHintCardBookmarkTypes, WidgetHintCardBookmarkApiInfoTypes } from './types';

const useWidgetHintCardBookmark = (props: UseWidgetHintCardBookmarkTypes) => {
  const { callEvent } = useAnalytics();
  const [bookmark, setBookmark] = useState(props.isBookmarked);
  const [apiInfo, setApiInfo] = useState<WidgetHintCardBookmarkApiInfoTypes>(null);

  const bookmarkHandler = () => {
    callEvent('hintBookMarked');
    if (bookmark) {
      setBookmark(false);
      setApiInfo({ api: 'archive/hint/bookmark', payload: { id: props.id }, method: 'DELETE' });
    } else {
      setBookmark(true);
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

  return { bookmark, bookmarkHandler };
};

export default useWidgetHintCardBookmark;
