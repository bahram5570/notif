import { useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { UseShareExperienceBookmarkProps } from './types';

const useShareExperienceBookmark = (props: UseShareExperienceBookmarkProps) => {
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);

  const api = `shareeexperience/v3/experience/${props.id}/bookmark`;

  const { callApi: callPostApi } = usePwaApi({ api, method: 'POST' });
  const { callApi: callDeleteApi } = usePwaApi({ api, method: 'DELETE' });

  const toggleBookmarkHandler = () => {
    if (isBookmarked) {
      setIsBookmarked(false);
      callDeleteApi({});
    } else {
      setIsBookmarked(true);
      callPostApi({});
    }
  };

  return { isBookmarked, toggleBookmarkHandler };
};

export default useShareExperienceBookmark;
