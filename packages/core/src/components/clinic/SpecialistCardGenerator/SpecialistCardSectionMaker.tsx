import { CustomTypography } from '../../ui/CustomTypography';
import useCardThemeFinder from './__hooks__/useCardThemeFinder';
import { SpecialistCardSectionMakerProps } from './types';

export const SpecialistCardSectionMaker = ({ isSelected, value, title, Icon }: SpecialistCardSectionMakerProps) => {
  const { theme } = useCardThemeFinder();

  return (
    <div className="flex flex-col items-center py-1 gap-1">
      <Icon className={`w-5 h-auto ${isSelected ? theme.strokeColor : 'stroke-impo_Neutral_OnBackground'}`} />

      <CustomTypography
        fontSize="Lable_Small"
        className={`${isSelected ? theme.TitleColor : 'text-impo_Neutral_OnBackground'}`}
      >
        {title}
      </CustomTypography>

      <CustomTypography
        fontSize="Lable_Medium"
        className={`${isSelected ? theme.valueColor : 'text-impo_Neutral_OnBackground'}`}
      >
        {value}
      </CustomTypography>
    </div>
  );
};
