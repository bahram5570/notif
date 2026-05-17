import { useEffect, useRef, useState } from 'react';

import { ExperiencesResponseTypes, PageInfoType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { QueryExperiencesDataTypes, SelectedCategoryIdTypes } from './types';

const useExperiences = (selectedCategoryId: SelectedCategoryIdTypes) => {
  const [pageInfo, setPageInfo] = useState<PageInfoType | null>(null);
  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery(['experiences']);
  const { accessOptionHandler } = useShareExperienceHandlers();
  const requestLockRef = useRef(false);
  const experiencesData = getQuery<QueryExperiencesDataTypes>({
    queryKey: ['experiences'],
  });

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
      updateQuery({
        queryKey: ['experiences'],
        payload: {
          expirences: [...experiencesData.expirences, ...v.expirences],
        },
      });
    } else {
      newQuery({
        queryKey: ['experiences'],
        payload: {
          expirences: v.expirences,
        },
      });
    }
  };

  const { callApi: getFirstPage, isLoading: loading } = usePwaApi<ExperiencesResponseTypes>({
    api: `shareeexperience/v3/category/${selectedCategoryId}/first`,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['experiences-first'],
  });

  const { callApi: getNextPage, isLoading: nextPageLoading } = usePwaApi<ExperiencesResponseTypes>({
    api: pageInfo?.lastId ? `shareeexperience/v3/category/${selectedCategoryId}/nextpage/${pageInfo.lastId}` : '',
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
