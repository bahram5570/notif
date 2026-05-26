import SelectedIcon from '@assets/shared/icons/selectedTick.svg';

import { CustomImage_NEW } from '../../../ui/CustomImage_NEW';
import { CustomTypography } from '../../../ui/CustomTypography';
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

        {isSelected && <SelectedIcon className="absolute right-0 bottom-0 w-6 h-6 " />}

        <CustomImage_NEW src={icon} fill={true} className="object-cover" />
      </div>

      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
        {title}
      </CustomTypography>
    </div>
  );
};

export default KitTestBabyCheckGenerator;
