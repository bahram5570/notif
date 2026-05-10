import { useEffect, useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { UseShareExperienceBookmarkProps } from './types';
import useUpdateExperienceList from './updateHandlers/useUpdateExperienceList';
import useUpdateTopicExperience from './updateHandlers/useUpdateTopicExperience';

const useShareExperienceBookmark = (props: UseShareExperienceBookmarkProps) => {
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
  const { updateExperienceListHandler } = useUpdateExperienceList();
  const { updateTopicExperience } = useUpdateTopicExperience();

  const api = `manshareeexperience/v3/experience/${props.id}/bookmark`;

  const sussessHandler = () => {
    updateExperienceListHandler({ id: props.id, isBookmarked });
    updateTopicExperience({ id: props.id, isBookmarked });
  };

  const { callApi: callPostApi } = usePwaApi({ api, method: 'POST', onSuccess: sussessHandler });
  const { callApi: callDeleteApi } = usePwaApi({ api, method: 'DELETE', onSuccess: sussessHandler });

  const toggleBookmarkHandler = () => {
    if (isBookmarked) {
      setIsBookmarked(false);
      callDeleteApi({});
    } else {
      setIsBookmarked(true);
      callPostApi({});
    }
  };

  useEffect(() => {
    setIsBookmarked(props.isBookmarked);
  }, [props.isBookmarked]);

  return { isBookmarked, toggleBookmarkHandler };
};

export default useShareExperienceBookmark;
