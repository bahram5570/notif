import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { SelfExperienceDataType } from '../../../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperienceProfileActivities/__hooks__/useActivitiesData/type';
import { UpdateHandlerType } from '../../types';

const useUpdateActivitiesList = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const updateActivitiesListHandler: UpdateHandlerType = (v) => {
    const exitActivitiesData = getQuery<SelfExperienceDataType>({ queryKey: ['activities'] });
    if (exitActivitiesData) {
      exitActivitiesData.list.forEach((item) => {
        if (item.userId === v?.userId) {
          item.isFollow = !v.isFollow;
        }
      });

      updateQuery({ queryKey: ['activities'], payload: exitActivitiesData });
    }
  };

  return { updateActivitiesListHandler };
};

export default useUpdateActivitiesList;
