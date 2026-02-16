import ShareExperienceAssociationItemModules from '../../../ShareExperienceModules/ShareExperienceAssociationItemModules';
import { AssociationItemPropsType } from './type';

const AssociationItem = ({ cover, id, isFollow, title }: AssociationItemPropsType) => {
  return (
    <ShareExperienceAssociationItemModules
      className="flex flex-col items-center justify-center gap-2"
      image={cover}
      title={title}
      imageHeight={72}
      imageWidth={72}
      id={id}
    />
  );
};

export default AssociationItem;
