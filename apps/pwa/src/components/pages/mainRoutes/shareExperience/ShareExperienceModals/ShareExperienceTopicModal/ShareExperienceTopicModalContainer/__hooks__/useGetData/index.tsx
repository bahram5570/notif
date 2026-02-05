import { useEffect, useState } from 'react';

import { EXPERIENCES_PAGE_SIZE } from '@components/pages/mainRoutes/shareExperience/constants';
import useApi from '@hooks/useApi';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { ExperiencesResponseTypes, useGetDataPropsType } from './type';

const useGetData = ({ topicId }: useGetDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);

  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery(['topicExperiences']);

  const topicExperiencesData = getQuery<ExperiencesResponseTypes>({ queryKey: ['topicExperiences'] });

  const successHandler = (v: ExperiencesResponseTypes) => {
    if (topicExperiencesData) {
      const list = { ...topicExperiencesData, expirences: [...topicExperiencesData.expirences, ...v.expirences] };
      updateQuery({ queryKey: ['topicExperiences'], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['topicExperiences'] });
    }
  };

  const api = `shareeexperience/v3/topic/${topicId}/${pageNo}/${EXPERIENCES_PAGE_SIZE}`;

  const { callApi, isLoading: apiLoading } = useApi<ExperiencesResponseTypes>({
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
