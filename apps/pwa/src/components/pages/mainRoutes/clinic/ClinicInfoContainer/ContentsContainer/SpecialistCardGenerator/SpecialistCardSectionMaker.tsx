import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SpecialistCardSectionMakerProps } from './types';

const SpecialistCardSectionMaker = ({ isSelected, value, title, Icon }: SpecialistCardSectionMakerProps) => (
  <div className="flex flex-col items-center py-1 gap-1">
    <Icon className={`w-5 h-auto ${isSelected ? 'stroke-impo_Black' : 'stroke-impo_Neutral_OnBackground'}`} />

    <CustomTypography
      fontSize="Lable_Small"
      className={`${isSelected ? 'text-impo_Black' : 'text-impo_Neutral_OnBackground'}`}
    >
      {title}
    </CustomTypography>

    <CustomTypography
      fontSize="Lable_Medium"
      className={`${isSelected ? 'text-impo_Black' : 'text-impo_Neutral_OnBackground'}`}
    >
      {value}
    </CustomTypography>
  </div>
);

export default SpecialistCardSectionMaker;
