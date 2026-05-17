import { useEffect, useRef, useState } from 'react';

import { PageInfoType, TopicExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { useGetDataPropsType } from './type';

const useGetData = ({ topicId }: useGetDataPropsType) => {
  const [pageInfo, setPageInfo] = useState<PageInfoType | null>(null);
  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery(['topicExperiences']);
  const { accessOptionHandler } = useShareExperienceHandlers();
  const topicExperiencesData = getQuery<TopicExperiencesResponseTypes>({ queryKey: ['topicExperiences'] });
  const requestLockRef = useRef(false);

  const successHandler = (v: TopicExperiencesResponseTypes) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }
    requestLockRef.current = false;
    setPageInfo(v.page);
    if (topicExperiencesData) {
      const list = { ...topicExperiencesData, expirences: [...topicExperiencesData.expirences, ...v.expirences] };
      updateQuery({ queryKey: ['topicExperiences'], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['topicExperiences'] });
    }
  };

  const { callApi, isLoading: apiLoading } = usePwaApi<TopicExperiencesResponseTypes>({
    api: `shareeexperience/v3/topic/${topicId}/first`,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['topicExperiences' + topicId],
  });

  const { callApi: getNextPage, isLoading: nextPageLoading } = usePwaApi<TopicExperiencesResponseTypes>({
    api: pageInfo?.lastId ? `shareeexperience/v3/topic/${topicId}/nextpage/${pageInfo.lastId}` : '',
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['topicExperiences' + pageInfo?.lastId],
  });

  useEffect(() => {
    if (topicId) {
      removeQuery({ queryKey: ['topicExperiences'] });
      callApi();
    }
  }, [topicId]);

  const updateList = () => {
    if (!pageInfo?.hasNext) return;

    if (requestLockRef.current) return;

    requestLockRef.current = true;

    getNextPage();
  };
  const isLoading = apiLoading || nextPageLoading;

  return { isLoading, topicExperiencesData, updateList, apiLoading };
};

export default useGetData;
