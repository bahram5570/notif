import { useEffect, useRef, useState } from 'react';

import { ExperiencesResponseTypes, PageInfoType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { QueryExperiencesDataTypes, SelectedCategoryIdTypes } from './types';

const useExperiences = (selectedCategoryId: SelectedCategoryIdTypes) => {
  const [pageInfo, setPageInfo] = useState<PageInfoType | null>(null);
  const { accessOptionHandler } = useShareExperienceHandlers();
  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery(['experiences']);
  const requestLockRef = useRef(false);

  const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });

  const successHandler = (v: ExperiencesResponseTypes) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }
    requestLockRef.current = false;
    setPageInfo(v.page);

    if (experiencesData) {
      const list = { expirences: [...experiencesData.expirences, ...v.expirences] };
      updateQuery({ queryKey: ['experiences'], payload: list });
    } else {
      newQuery({ payload: { expirences: v.expirences }, queryKey: ['experiences'] });
    }
  };

  const { callApi: getFirstPage, isLoading: loading } = usePwaApi<ExperiencesResponseTypes>({
    api: `manshareeexperience/v3/category/${selectedCategoryId}/first`,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['experiences-first'],
  });

  const { callApi: getNextPage, isLoading: nextPageLoading } = usePwaApi<ExperiencesResponseTypes>({
    api: pageInfo?.lastId ? `manshareeexperience/v3/category/${selectedCategoryId}/nextpage/${pageInfo.lastId}` : '',
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['experiences-next' + pageInfo?.lastId],
  });

  useEffect(() => {
    if (selectedCategoryId) {
      removeQuery({
        queryKey: ['experiences'],
      });

      getFirstPage();
    }
  }, [selectedCategoryId]);

  const updateList = () => {
    if (!pageInfo?.hasNext) return;

    if (requestLockRef.current) return;

    requestLockRef.current = true;

    getNextPage();
  };

  const isLoading = nextPageLoading || loading;
  return {
    isLoading,
    experiencesData,
    updateList,
  };
};

export default useExperiences;
