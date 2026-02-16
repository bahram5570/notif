import { useEffect, useState } from 'react';

import { PAGE_SIZE } from '@components/infiniteScrollContainer/constatns';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { AssociationExperiencesResponseType, useGetAssociationItemDataPropsType } from './type';

const useGetAssociationItemData = ({ AssociationId }: useGetAssociationItemDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery([`associationExperienceList${AssociationId}`]);

  const associationExperienceList = getQuery<AssociationExperiencesResponseType>({
    queryKey: [`associationExperienceList${AssociationId}`],
  });

  const successHandler = (v: AssociationExperiencesResponseType) => {
    if (associationExperienceList) {
      const list = {
        ...associationExperienceList,
        experiences: [...associationExperienceList.experiences, ...v.experiences],
      };
      updateQuery({ queryKey: [`associationExperienceList${AssociationId}`], payload: list });
    } else {
      newQuery({ payload: v, queryKey: [`associationExperienceList${AssociationId}`] });
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
  return { experiencesLoading, pageNo, associationExperienceList, updatePageNo };
};

export default useGetAssociationItemData;
