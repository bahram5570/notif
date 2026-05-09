import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { SelfExperienceDataType } from '../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperienceProfileActivities/__hooks__/useActivitiesData/type';
import { UpdateSelfExperienceListHandlerProps } from './type';

const useUpdateSelfExperienceList = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();
  const updateSelfExperienceListHandler = ({ shareId }: UpdateSelfExperienceListHandlerProps) => {
    const exitProfileQueryKey = getQuery<ProfileResponsePropsType>({
      queryKey: ['shareExperienceProfile'],
    });
    const selfExperience = getQuery<SelfExperienceDataType>({ queryKey: ['selfExperience'] });

    if (selfExperience && exitProfileQueryKey) {
      const filterSelfExperinces = selfExperience.list.filter((item) => item.id !== shareId);

      const payload = { list: filterSelfExperinces };
      const payloadProfile = { ...exitProfileQueryKey, storyCount: exitProfileQueryKey.storyCount - 1 };
      updateQuery({ queryKey: ['selfExperience'], payload });
      updateQuery({ queryKey: ['shareExperienceProfile'], payload: payloadProfile });
    }
  };

  return { updateSelfExperienceListHandler };
};

export default useUpdateSelfExperienceList;
