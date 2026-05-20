import { useEffect, useState } from 'react';

import { EXPERIENCES_PAGE_SIZE, TopicExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { useGetDataPropsType } from './type';

const useGetData = ({ topicId }: useGetDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);

  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery(['topicExperiences']);
  const { accessOptionHandler } = useShareExperienceHandlers();
  const topicExperiencesData = getQuery<TopicExperiencesResponseTypes>({ queryKey: ['topicExperiences'] });

  const successHandler = (v: TopicExperiencesResponseTypes) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }
    if (topicExperiencesData) {
      const list = { ...topicExperiencesData, expirences: [...topicExperiencesData.expirences, ...v.expirences] };
      updateQuery({ queryKey: ['topicExperiences'], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['topicExperiences'] });
    }
  };

  const api = `manshareeexperience/v3/topic/${topicId}/${pageNo}/${EXPERIENCES_PAGE_SIZE}`;

  const { callApi, isLoading: apiLoading } = usePwaApi<TopicExperiencesResponseTypes>({
    api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['topicExperiences' + pageNo],
  });

  useEffect(() => {
    if (topicId) {
      removeQuery({ queryKey: ['topicExperiences'] });
      setPageNo(0);
      callApi();
    }
  }, [topicId]);

  useEffect(() => {
    if (pageNo > 0 && !isLoading) {
      callApi();
    }
  }, [pageNo, apiLoading]);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  const isLoading = apiLoading && pageNo === 0;

  return { isLoading, topicExperiencesData, pageNo, updatePageNo, apiLoading };
};

export default useGetData;
