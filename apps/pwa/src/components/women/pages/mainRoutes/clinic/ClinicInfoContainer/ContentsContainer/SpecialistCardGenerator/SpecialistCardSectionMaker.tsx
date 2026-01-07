import Dark_Typography from '@components/ui/Dark_Typography';

import { SpecialistCardSectionMakerProps } from './types';

const SpecialistCardSectionMaker = ({ isSelected, value, title, Icon }: SpecialistCardSectionMakerProps) => (
  <div className="flex flex-col items-center py-1 gap-1">
    <Icon
      className={`w-5 h-auto ${isSelected ? 'stroke-impo_Neutral_OnBackground' : 'stroke-impo_Neutral_OnBackground'}`}
    />

    <Dark_Typography
      fontSize="Lable_Small"
      className={`${isSelected ? 'text-impo_Neutral_OnBackground' : 'text-impo_Neutral_OnBackground'}`}
    >
      {title}
    </Dark_Typography>

    <Dark_Typography
      fontSize="Lable_Medium"
      className={`${isSelected ? 'text-impo_Neutral_OnBackground' : 'text-impo_Neutral_OnBackground'}`}
    >
      {value}
    </Dark_Typography>
  </div>
);

export default SpecialistCardSectionMaker;
