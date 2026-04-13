import { useSystem } from '../../../hooks/useSystem';
import { CustomTypography } from '../../ui/CustomTypography';
import { SpecialistCardSectionMakerProps } from './types';

const SpecialistCardSectionMaker = ({ isSelected, value, title, Icon }: SpecialistCardSectionMakerProps) => {
  const { appName } = useSystem();
  const isMan = appName === 'MEN_PWA';

  const strokeColor = isMan ? 'stroke-[#C8ECFF]' : 'stroke-impo_Black';
  const TitleColor = isMan ? 'text-[#C8ECFF]' : 'text-impo_Black';
  const valueColor = isMan ? 'text-impo_White' : "text-impo_Black'";

  return (
    <div className="flex flex-col items-center py-1 gap-1">
      <Icon className={`w-5 h-auto ${isSelected ? strokeColor : 'stroke-impo_Neutral_OnBackground'}`} />

      <CustomTypography
        fontSize="Lable_Small"
        className={`${isSelected ? TitleColor : 'text-impo_Neutral_OnBackground'}`}
      >
        {title}
      </CustomTypography>

      <CustomTypography
        fontSize="Lable_Medium"
        className={`${isSelected ? valueColor : 'text-impo_Neutral_OnBackground'}`}
      >
        {value}
      </CustomTypography>
    </div>
  );
};

export default SpecialistCardSectionMaker;
