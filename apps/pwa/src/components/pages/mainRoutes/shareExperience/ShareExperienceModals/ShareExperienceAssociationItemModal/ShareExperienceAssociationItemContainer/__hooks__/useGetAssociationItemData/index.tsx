import { useEffect, useState } from 'react';

import { PAGE_SIZE } from '@repo/core/constants/app.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { AssociationExperiencesResponseType, useGetAssociationItemDataPropsType } from './type';

const useGetAssociationItemData = ({ AssociationId }: useGetAssociationItemDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery([`associationExperienceList`]);
  const { accessOptionHandler } = useShareExperienceHandlers();

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
    api: `shareeexperience/v3/association/experiences/${AssociationId}/${pageNo}/${PAGE_SIZE}`,
    method: 'GET',
    queryKey: [`associationExperiences${AssociationId}`],
    fetchOnMount: false,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (AssociationId) {
      removeQuery({ queryKey: ['associationExperienceList'] });
      callApi();
    }
  }, [AssociationId]);

  useEffect(() => {
    if (pageNo > 0 && !experiencesLoading) {
      callApi();
    }
  }, [pageNo, experiencesLoading]);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  const resetPageNo = () => {
    setPageNo(0);
  };
  return { experiencesLoading, pageNo, associationExperienceList, updatePageNo, resetPageNo };
};

export default useGetAssociationItemData;
