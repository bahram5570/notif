import { useEffect, useState } from 'react';

import { WidgetStoryTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { MOOD_TRACKER_LIST } from '../../constants';
import { UseMoodTrackerListProps } from './types';

const useMoodTrackerList = (moodTrackerData: UseMoodTrackerListProps) => {
  const [moodTrackerList, setMoodTrackerList] = useState(MOOD_TRACKER_LIST);

  useEffect(() => {
    if (moodTrackerData.type === WidgetStoryTypeEnum.MoodTracker) {
      const list = [...moodTrackerList];

      moodTrackerData.items.forEach((item, index) => {
        list[index].isSelected = item.isSelected;
      });

      setMoodTrackerList(list);
    }
  }, []);

  return { moodTrackerList };
};

export default useMoodTrackerList;
