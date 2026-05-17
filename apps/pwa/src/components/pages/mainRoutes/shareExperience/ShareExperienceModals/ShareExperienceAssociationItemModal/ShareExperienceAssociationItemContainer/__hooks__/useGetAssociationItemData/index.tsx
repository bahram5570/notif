import { useEffect, useRef, useState } from 'react';

import { PageInfoType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { AssociationExperiencesResponseType, useGetAssociationItemDataPropsType } from './type';

const useGetAssociationItemData = ({ AssociationId }: useGetAssociationItemDataPropsType) => {
  const [pageInfo, setPageInfo] = useState<PageInfoType | null>(null);
  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery([`associationExperienceList`]);
  const { accessOptionHandler } = useShareExperienceHandlers();
  const requestLockRef = useRef(false);

  const associationExperienceList = getQuery<AssociationExperiencesResponseType>({
    queryKey: [`associationExperienceList`],
  });

  const successHandler = (v: AssociationExperiencesResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

    requestLockRef.current = false;
    setPageInfo(v.page);
    if (associationExperienceList) {
      const list = {
        ...associationExperienceList,
        experiences: [...associationExperienceList.experiences, ...v.experiences],
      };
      updateQuery({ queryKey: [`associationExperienceList`], payload: list });
    } else {
      newQuery({ payload: v, queryKey: [`associationExperienceList`] });
    }
  };

  const { isLoading: experiencesLoading, callApi } = usePwaApi<AssociationExperiencesResponseType>({
    api: `shareeexperience/v3/association/experiences/${AssociationId}/first`,
    method: 'GET',
    queryKey: [`associationExperiences${AssociationId}`],
    fetchOnMount: false,
    onSuccess: successHandler,
  });

  const { callApi: getNextPage, isLoading: nextPageLoading } = usePwaApi<AssociationExperiencesResponseType>({
    api: pageInfo?.lastId
      ? `shareeexperience/v3/association/experiences/${AssociationId}/nextpage/${pageInfo.lastId}`
      : '',
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['associationExperiences' + pageInfo?.lastId],
  });

  useEffect(() => {
    if (AssociationId) {
      removeQuery({ queryKey: ['associationExperienceList'] });
      callApi();
    }
  }, [AssociationId]);

  const updateList = () => {
    if (!pageInfo?.hasNext) return;

    if (requestLockRef.current) return;

    requestLockRef.current = true;

    getNextPage();
  };

  const loading = nextPageLoading || experiencesLoading;
  return { experiencesLoading, associationExperienceList, updateList, loading };
};

export default useGetAssociationItemData;
