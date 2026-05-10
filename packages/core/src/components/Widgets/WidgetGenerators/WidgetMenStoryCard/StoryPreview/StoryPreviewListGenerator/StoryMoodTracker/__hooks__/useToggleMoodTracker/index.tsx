import { currentDate } from '../../../../../../../../../utils/dates';

import { useCustomReactQuery } from '../../../../../../../../../hooks/useCustomReactQuery';
import { usePwaApi } from '../../../../../../../../../hooks/usePwaApi';
import { WidgetStoryTypeEnum } from '../../../../../../../../../providers/WidgetActionsProvider';
import { OriginalStoryDataTypes } from '../../../../../__hooks__/useStoryCardData/types';
import { STORY_CARD_DATA_NAME, STORY_MOOD_TRACKER_NAME } from '../../../../../constants';

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
      data.list;
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
