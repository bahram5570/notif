import { currentDate } from '@repo/core/utils/dates';

import { OriginalStoryDataTypes } from '@components/Widgets/widgetGenerator/WidgetStoryCard/__hooks__/useStoryCardData/types';
import {
  STORY_CARD_DATA_NAME,
  STORY_MOOD_TRACKER_NAME,
} from '@components/Widgets/widgetGenerator/WidgetStoryCard/constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { WidgetStoryTypeEnum } from '@repo/core/providers/WidgetActionsProvider';

const { gDate } = currentDate();

const useToggleMoodTracker = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const { callApi: callAddApi } = usePwaApi({ api: 'feature/moodtracker/mood', method: 'POST' });
  const { callApi: callDeleteApi } = usePwaApi({ api: 'feature/moodtracker/mood', method: 'DELETE' });

  const selectHandler = (isSelected: boolean, type: number) => {
    if (isSelected) {
      callDeleteApi({ type, date: gDate });
    } else {
      callAddApi({ type, date: gDate });
    }

    const data = getQuery<OriginalStoryDataTypes>({ queryKey: [STORY_CARD_DATA_NAME] });

    if (data) {
      const storyIndex = data.list.findIndex((i) => i.id === STORY_MOOD_TRACKER_NAME);
      const events = data.list[storyIndex].events[0];

      if (events.type === WidgetStoryTypeEnum.MoodTracker) {
        const itemIndex = events.items.findIndex((i) => i.type === type);
        events.items[itemIndex].isSelected = !isSelected;

        const isViewed = events.items.some((i) => i.isSelected);
        data.list[storyIndex].isViewed = isViewed;

        updateQuery({ queryKey: [STORY_CARD_DATA_NAME], payload: data });
      }
    }
  };

  return { selectHandler };
};

export default useToggleMoodTracker;
