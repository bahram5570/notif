import { currentDate } from '@utils/dates';

import { OriginalStoryDataTypes } from '@components/women/Widgets/widgetGenerator/WidgetStoryCard/__hooks__/useStoryCardData/types';
import {
  STORY_CARD_DATA_NAME,
  STORY_MOOD_TRACKER_NAME,
} from '@components/women/Widgets/widgetGenerator/WidgetStoryCard/constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { WidgetStoryTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

const { gDate } = currentDate();

const useToggleMoodTracker = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const { callApi: callAddApi } = useApi({ api: 'feature/moodtracker/mood', method: 'POST' });
  const { callApi: callDeleteApi } = useApi({ api: 'feature/moodtracker/mood', method: 'DELETE' });

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
