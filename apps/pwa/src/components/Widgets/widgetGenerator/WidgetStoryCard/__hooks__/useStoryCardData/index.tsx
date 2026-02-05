import { useEffect } from 'react';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { STORY_CARD_DATA_NAME, STORY_MOOD_TRACKER_NAME } from '../../constants';
import { OriginalStoryDataTypes } from './types';

const useStoryCardData = (originalStoryData: OriginalStoryDataTypes) => {
  const { getQuery, newQuery } = useCustomReactQuery([STORY_CARD_DATA_NAME]);
  const { getQueryParams } = useQueryParamsHandler();

  useEffect(() => {
    newQuery({ queryKey: [STORY_CARD_DATA_NAME], payload: originalStoryData });
  }, [originalStoryData]);

  const data = getQuery<OriginalStoryDataTypes>({ queryKey: [STORY_CARD_DATA_NAME] });
  const isModalOpen = getQueryParams(MODALS.STORY_MODAL_ID) !== null;

  useEffect(() => {
    if (data && !isModalOpen) {
      data.list.sort((a, b) => {
        return (b.isViewed === false ? 1 : 0) - (a.isViewed === false ? 1 : 0);
      });

      const moodTrackerIndex = data.list.findIndex((i) => i.id === STORY_MOOD_TRACKER_NAME);
      const moodTrackerData = data.list[moodTrackerIndex];

      if (moodTrackerData?.isViewed === false) {
        const copyMoodTrackerData = { ...moodTrackerData };
        data.list.splice(moodTrackerIndex, 1);
        data.list.unshift(copyMoodTrackerData);
      }
    }
  }, [data, isModalOpen]);

  return { data };
};

export default useStoryCardData;
