import ShareExperienceNewLink from '../../../ShareExperienceContainer/ShareExperienceNewLink';
import ShareExperienceAssociationItemHeader from './ShareExperienceAssociationItemHeader';
import useGetAssociationItemData from './__hooks__/useGetAssociationItemData';
import { ShareExperienceAssociationItemContainerPropsType } from './type';

const ShareExperienceAssociationItemContainer = ({
  AssociationId,
}: ShareExperienceAssociationItemContainerPropsType) => {
  const { isLoading } = useGetAssociationItemData({ AssociationId });
  return (
    <>
      <ShareExperienceNewLink />
      <ShareExperienceAssociationItemHeader />
    </>
  );
};

export default ShareExperienceAssociationItemContainer;
