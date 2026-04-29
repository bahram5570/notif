import { AssociationExperiencesResponseType } from '@components/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationItemData/type';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateAssociationHandler } from './types';

const useLikeAssociationExperience = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateAssociationHandler: UpdateAssociationHandler = (v) => {
    const associationExperienceList = getQuery<AssociationExperiencesResponseType>({
      queryKey: [`associationExperienceList`],
    });
    if (associationExperienceList) {
      const index = associationExperienceList.experiences.findIndex((item) => item.id === v.shareId);

      if (index > -1) {
        const experience = associationExperienceList.experiences[index];
        experience.likeCount = v.likeCount;
        experience.disliked = v.disliked;
        experience.state = v.state;

        const payload = { ...associationExperienceList };
        updateQuery({ queryKey: ['associationExperienceList'], payload });
      }
    }
  };

  return { updateAssociationHandler };
};

export default useLikeAssociationExperience;
