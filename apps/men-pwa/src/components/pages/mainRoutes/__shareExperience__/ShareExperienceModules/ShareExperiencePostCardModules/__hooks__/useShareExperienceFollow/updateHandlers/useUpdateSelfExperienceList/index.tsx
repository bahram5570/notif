// import { SelfExperienceDataType } from '@components/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperienceProfileActivities/__hooks__/useActivitiesData/type';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateHandlerType } from '../../types';

const useUpdateSelfExperienceList = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const updateSelfExperienceListHandler: UpdateHandlerType = (v) => {
    // const exitSelfExperienceData = getQuery<SelfExperienceDataType>({ queryKey: ['selfExperience'] });
    // if (exitSelfExperienceData) {
    //   exitSelfExperienceData.list.forEach((item) => {
    //     if (item.userId === v?.userId) {
    //       item.isFollow = !v.isFollow;
    //     }
    //   });
    //   updateQuery({ queryKey: ['selfExperience'], payload: exitSelfExperienceData });
    // }
  };

  return { updateSelfExperienceListHandler };
};

export default useUpdateSelfExperienceList;
