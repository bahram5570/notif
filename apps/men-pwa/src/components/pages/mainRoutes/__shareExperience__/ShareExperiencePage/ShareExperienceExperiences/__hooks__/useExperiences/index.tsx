import { useEffect, useState } from 'react';

import { EXPERIENCES_PAGE_SIZE, ExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { QueryExperiencesDataTypes, SelectedCategoryIdTypes } from './types';

const useExperiences = (selectedCategoryId: SelectedCategoryIdTypes) => {
  const [pageNo, setPageNo] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery(['experiences']);

  const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });

  const successHandler = (v: ExperiencesResponseTypes) => {
    setTotalCount(v.totalCount);

    if (experiencesData) {
      const list = { expirences: [...experiencesData.expirences, ...v.expirences] };
      updateQuery({ queryKey: ['experiences'], payload: list });
    } else {
      newQuery({ payload: { expirences: v.expirences }, queryKey: ['experiences'] });
    }
  };

  const api = `manshareeexperience/v3/category/${selectedCategoryId}/${pageNo}/${EXPERIENCES_PAGE_SIZE}`;

  const { callApi, isLoading } = usePwaApi<ExperiencesResponseTypes>({
    api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['experiences' + pageNo],
  });

  useEffect(() => {
    // # Calls api on category change
    if (selectedCategoryId) {
      callApi();
      removeQuery({ queryKey: ['experiences'] });
    }
  }, [selectedCategoryId]);

  useEffect(() => {
    if (pageNo > 0 && !isLoading) {
      callApi();
    }
  }, [pageNo, isLoading]);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  return { isLoading, experiencesData, pageNo, totalCount, updatePageNo };
};

export default useExperiences;
