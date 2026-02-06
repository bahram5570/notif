import { useEffect, useState } from 'react';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SavedStoriesResponseTypes } from './types';

const useGetData = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const { getQueryParams } = useQueryParamsHandler();
  const [removeList, setRemoveList] = useState<string[]>([]);

  const { isLoading, data } = usePwaApi<SavedStoriesResponseTypes>({
    method: 'GET',
    queryKey: ['savedStories'],
    api: 'story/bookmark/0/1000000',
  });

  const saveHandler = (storyId: string) => {
    const copyList = [...removeList];
    const isInList = copyList.includes(storyId);

    if (isInList) {
      copyList.filter((id) => id !== storyId);
    } else {
      copyList.push(storyId);
    }

    setRemoveList(copyList);
  };

  const isStoryModalOpen = getQueryParams(MODALS.STORY_MODAL_ID) !== null;

  useEffect(() => {
    if (!isStoryModalOpen && removeList.length > 0) {
      const newData = getQuery<SavedStoriesResponseTypes>({ queryKey: ['savedStories'] });

      if (newData) {
        newData.items = newData.items.filter((item) => !removeList.includes(item.id));
        updateQuery({ queryKey: ['savedStories'], payload: newData });
      }
    }
  }, [removeList, isStoryModalOpen]);

  return { isLoading, data, saveHandler };
};

export default useGetData;
