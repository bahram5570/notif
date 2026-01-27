import SelectedIcon from '@assets/icons/selectedTick.svg';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { KitTestDigitalBabyCheckGeneratorProps } from './types';

const KitTestDigitalBabyCheckGenerator = ({
  selectedDigitalBabyCheckHandler,
  selectedDigitalBabyCheck,
  babyCheckResult,
  title,
  icon,
}: KitTestDigitalBabyCheckGeneratorProps) => {
  const isSelected = selectedDigitalBabyCheck === babyCheckResult;

  return (
    <div
      className="flex flex-col items-center gap-3 cursor-pointer"
      onClick={() => selectedDigitalBabyCheckHandler(babyCheckResult)}
    >
      <div className="w-[72px] h-[72px] relative flex items-center justify-center">
        <div
          className={`
                      absolute 
                      top-0 
                      left-0 
                      right-0 
                      bottom-0 
                      rounded-full 
                      border-[1px]
                      bg-impo_Surface_SurfaceVariant
                      ${isSelected ? 'border-impo_Primary_Primary' : 'border-impo_Surface_OutlineVariant'}
                    `}
        />

        {isSelected && <SelectedIcon className="absolute right-0 bottom-0 w-6 h-6 " />}

        <CustomImage src={icon} width={48} />
      </div>

      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        {title}
      </Dark_Typography>
    </div>
  );
};

export default KitTestDigitalBabyCheckGenerator;
