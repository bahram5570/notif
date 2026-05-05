import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { QueryExperiencesDataTypes } from '../../../../../ShareExperienceTopicModal/ShareExperienceTopicModalContainer/__hooks__/useGetData/type';
import { UpdateHandlerType } from '../../types';

const useUpdateExperienceList = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateExperienceListHandler: UpdateHandlerType = (v) => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });

    if (experiencesData) {
      experiencesData.expirences.forEach((item) => {
        if (item.userId === v.userId) {
          item.isFollow = !v.isFollow;
        }
      });

      updateQuery({ queryKey: ['experiences'], payload: experiencesData });
    }
  };

  return { updateExperienceListHandler };
};

export default useUpdateExperienceList;
