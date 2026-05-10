import { QueryExperiencesDataTypes } from '@components/pages/mainRoutes/__shareExperience__/ShareExperiencePage/ShareExperienceExperiences/__hooks__/useExperiences/types';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateHandlerType } from '../../types';

const useUpdateExperienceList = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateExperienceListHandler: UpdateHandlerType = (v) => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });

    if (experiencesData) {
      experiencesData.expirences.forEach((item) => {
        if (item.id === v.id) {
          item.isBookmarked = v.isBookmarked;
        }
      });

      updateQuery({ queryKey: ['experiences'], payload: experiencesData });
    }
  };

  return { updateExperienceListHandler };
};

export default useUpdateExperienceList;
