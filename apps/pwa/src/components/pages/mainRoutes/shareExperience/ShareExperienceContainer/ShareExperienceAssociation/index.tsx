import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import AssociationItem from './AssociationItem';
import ViewAllButton from './ViewAllButton';
import { ASSOCATION_DATA } from './constants';

const ShareExperienceAssociation = () => {
  return (
    <div className="border-t-[1px] border-t-impo_Neutral_Surface py-4">
      <div className="flex flex-row-reverse items-center justify-between mb-3">
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          انجمن ها
        </CustomTypography>
        <ViewAllButton />
      </div>
      <CustomSlider>
        {ASSOCATION_DATA.slice(0, 4).map((item, index) => (
          <AssociationItem image={item.image} title={item.title} key={index} />
        ))}

        {ASSOCATION_DATA.length > 4 && <ViewAllButton />}
      </CustomSlider>
    </div>
  );
};

export default ShareExperienceAssociation;
