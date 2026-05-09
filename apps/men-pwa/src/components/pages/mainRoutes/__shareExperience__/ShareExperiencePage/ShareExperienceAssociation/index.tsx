import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import AssociationItem from './AssociationItem';
import ViewAllButton from './ViewAllButton';
import { ShareExperienceAssociationPropsType } from './type';

const ShareExperienceAssociation = ({ associationSectionTitle, associations }: ShareExperienceAssociationPropsType) => {
  return (
    <div className="border-t-[1px] border-t-impo_Neutral_Surface py-4 ">
      <div className="flex flex-row-reverse items-center justify-between mb-3 px-4">
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {associationSectionTitle}
        </CustomTypography>
        <ViewAllButton />
      </div>
      <CustomSlider gap={32} sidePadding={16}>
        {associations.slice(0, 4).map((item) => (
          <AssociationItem {...item} key={item.id} />
        ))}

        {associations.length > 4 && <ViewAllButton />}
      </CustomSlider>
    </div>
  );
};

export default ShareExperienceAssociation;
