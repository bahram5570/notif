import CheckIcon from '@assets/icons/check.svg';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { KitTestBabyCheckGeneratorProps } from './types';

const KitTestBabyCheckGenerator = ({
  selectedBabyCheckHandler,
  selectedBabyCheck,
  babyCheckType,
  title,
  icon,
}: KitTestBabyCheckGeneratorProps) => {
  const isSelected = selectedBabyCheck === babyCheckType;

  return (
    <div
      id={`AddBabyCheckType${babyCheckType}`}
      onClick={() => selectedBabyCheckHandler(babyCheckType)}
      className="flex flex-col items-center gap-2 cursor-pointer"
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

        {isSelected && (
          <div className="absolute right-0 bottom-0 w-6 h-6 rounded-full bg-impo_White">
            <CheckIcon />
          </div>
        )}

        <CustomImage src={icon} />
      </div>

      <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
        {title}
      </Dark_Typography>
    </div>
  );
};

export default KitTestBabyCheckGenerator;
