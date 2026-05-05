import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

// import { AssociationInfoResponseType } from '../../../ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationInfo/type';
// import { AssociationExperiencesResponseType } from '../../../ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationItemData/type';
import { UpdateAssociationInfoHandlerProps } from './type';

const useUpdateAssociationInfo = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();
  const updateAssociationInfoHandler = ({ shareId }: UpdateAssociationInfoHandlerProps) => {
    // const associationInfoData = getQuery<AssociationInfoResponseType>({
    //   queryKey: [`associationInfoData`],
    // });
    // const associationExperienceList = getQuery<AssociationExperiencesResponseType>({
    //   queryKey: [`associationExperienceList`],
    // });
    // if (associationInfoData) {
    //   const newData = { ...associationInfoData };
    //   newData.experienceCount = newData.experienceCount + -1;
    //   updateQuery({ queryKey: [`associationInfoData`], payload: newData });
    //   if (associationExperienceList) {
    //     const newExperienceList = {
    //       ...associationExperienceList,
    //       experiences: associationExperienceList.experiences.filter((item) => item.id !== shareId),
    //     };
    //     updateQuery({ queryKey: ['associationExperienceList'], payload: newExperienceList });
    //   }
    // }
  };

  return { updateAssociationInfoHandler };
};

export default useUpdateAssociationInfo;
