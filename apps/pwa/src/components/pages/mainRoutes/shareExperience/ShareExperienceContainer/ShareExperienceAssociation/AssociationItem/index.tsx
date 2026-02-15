import ShareExperienceAssociationItemModules from '../../../ShareExperienceModules/ShareExperienceAssociationItemModules';
import { AssociationItemPropsType } from './type';

const AssociationItem = ({ image, title }: AssociationItemPropsType) => {
  return (
    <ShareExperienceAssociationItemModules
      className="flex flex-col items-center justify-center gap-2"
      image={image}
      title={title}
      imageHeight={72}
      imageWidth={72}
      id={'111'}
    />
  );
};

export default AssociationItem;
