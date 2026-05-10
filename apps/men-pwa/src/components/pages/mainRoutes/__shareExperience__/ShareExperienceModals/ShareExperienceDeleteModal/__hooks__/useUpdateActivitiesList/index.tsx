import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { SelfExperienceDataType } from '../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperienceProfileActivities/__hooks__/useActivitiesData/type';
import { UpdateActivitiesListHandlerProps } from './type';

const useUpdateActivitiesList = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const updateActivitiesListHandler = ({ shareId }: UpdateActivitiesListHandlerProps) => {
    const exitProfileQueryKey = getQuery<ProfileResponsePropsType>({
      queryKey: ['shareExperienceProfile'],
    });
    const exitActivitiesData = getQuery<SelfExperienceDataType>({ queryKey: ['activities'] });
    if (exitActivitiesData && exitProfileQueryKey) {
      const filterSelfExperinces = exitActivitiesData.list.filter((item) => item.id !== shareId);

      const payload = { list: filterSelfExperinces };
      const payloadProfile = { ...exitProfileQueryKey, storyCount: exitProfileQueryKey.storyCount - 1 };
      updateQuery({ queryKey: ['activities'], payload });
      updateQuery({ queryKey: ['shareExperienceProfile'], payload: payloadProfile });
    }
  };

  return { updateActivitiesListHandler };
};

export default useUpdateActivitiesList;
