import { useEffect, useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { QueryExperiencesDataTypes } from '../../../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';
import useUpdateActivitiesList from '../useUpdateActivitiesList';
import useUpdateAssociationInfo from '../useUpdateAssociationInfo';
import useUpdateSelfExperienceList from '../useUpdateSelfExperienceList';
import useUpdateTopicExperienceList from '../useUpdateTopicExperienceList';

const useExperienceDelete = () => {
  const router = useRouter();
  const { updateQuery, getQuery } = useCustomReactQuery();
  const [shareId, setShareId] = useState<null | string>(null);
  const { updateAssociationInfoHandler } = useUpdateAssociationInfo();
  const { updateSelfExperienceListHandler } = useUpdateSelfExperienceList();
  const { updateTopicExperienceListHandler } = useUpdateTopicExperienceList();
  const { updateActivitiesListHandler } = useUpdateActivitiesList();

  const successHandler = () => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });

    if (experiencesData) {
      const filteredExperinces = experiencesData.expirences.filter((item) => item.id !== shareId);
      const payload = { expirences: filteredExperinces };
      updateQuery({ queryKey: ['experiences'], payload });
    }

    updateAssociationInfoHandler({ shareId });
    updateSelfExperienceListHandler({ shareId });
    updateTopicExperienceListHandler({ shareId });
    updateActivitiesListHandler({ shareId });

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
