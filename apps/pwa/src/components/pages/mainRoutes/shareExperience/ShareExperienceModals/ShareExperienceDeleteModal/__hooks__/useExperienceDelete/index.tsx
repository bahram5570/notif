import { useEffect, useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { QueryExperiencesDataTypes } from '../../../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';
import { AssociationInfoResponseType } from '../../../ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationInfo/type';
import { AssociationExperiencesResponseType } from '../../../ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationItemData/type';
import { QuerySelfExperiencesDataTypes } from '../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperienceProfileSelfList/__hooks__/useSelfExperienceData/type';
import { ShareExperenceProfileResponsePropsType } from '../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/__hooks__/useGetData/type';

const useExperienceDelete = () => {
  const router = useRouter();
  const { updateQuery, getQuery } = useCustomReactQuery();
  const [shareId, setShareId] = useState<null | string>(null);

  const successHandler = () => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });

    const associationInfoData = getQuery<AssociationInfoResponseType>({
      queryKey: [`associationInfoData`],
    });
    const associationExperienceList = getQuery<AssociationExperiencesResponseType>({
      queryKey: [`associationExperienceList`],
    });

    if (associationInfoData) {
      const newData = { ...associationInfoData };
      newData.experienceCount = newData.experienceCount + -1;

      updateQuery({ queryKey: [`associationInfoData`], payload: newData });

      if (associationExperienceList) {
        const newExperienceList = {
          ...associationExperienceList,
          experiences: associationExperienceList.experiences.filter((item) => item.id !== shareId),
        };

        updateQuery({ queryKey: ['associationExperienceList'], payload: newExperienceList });
      }
    }

    if (experiencesData) {
      const filteredExperinces = experiencesData.expirences.filter((item) => item.id !== shareId);
      const payload = { expirences: filteredExperinces };
      updateQuery({ queryKey: ['experiences'], payload });
    }

    const exitProfileQueryKey = getQuery<ShareExperenceProfileResponsePropsType>({
      queryKey: ['shareExperienceProfile'],
    });

    const selfExperience = getQuery<QuerySelfExperiencesDataTypes>({ queryKey: ['selfExperience'] });

    if (selfExperience && exitProfileQueryKey) {
      const filterSelfExperinces = selfExperience?.expirences.filter((item) => item.id !== shareId);
      const payload = { expirences: filterSelfExperinces };
      const payloadProfile = { ...exitProfileQueryKey, storyCount: filterSelfExperinces.length };
      updateQuery({ queryKey: ['selfExperience'], payload });
      updateQuery({ queryKey: ['shareExperienceProfile'], payload: payloadProfile });
    }

    setShareId(null);
    router.back();
  };

  const errorHandler = () => {
    setShareId(null);
  };

  const api = `shareeexperience/v3/experience/${shareId}`;

  const { callApi, isLoading: isExperienceLoading } = usePwaApi({
    api,
    method: 'DELETE',
    onError: errorHandler,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (shareId !== null) {
      callApi({});
    }
  }, [shareId]);

  const experienceApplyHandler = (id: string) => {
    setShareId(id);
  };

  return { experienceApplyHandler, isExperienceLoading };
};

export default useExperienceDelete;
