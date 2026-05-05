import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

// import { AssociationExperiencesResponseType } from '../../../../../ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationItemData/type';
import { UpdateHandlerType } from '../../types';

const useUpdateAssociationExperienceList = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateAssociationExperienceList: UpdateHandlerType = (v) => {
    // const associationExperienceList = getQuery<AssociationExperiencesResponseType>({
    //   queryKey: [`associationExperienceList`],
    // });
    // if (associationExperienceList) {
    //   associationExperienceList.experiences.forEach((item) => {
    //     if (item.userId === v?.userId) {
    //       item.isFollow = !v.isFollow;
    //     }
    //   });
    //   updateQuery({ queryKey: ['associationExperienceList'], payload: associationExperienceList });
    // }
  };

  return { updateAssociationExperienceList };
};

export default useUpdateAssociationExperienceList;
