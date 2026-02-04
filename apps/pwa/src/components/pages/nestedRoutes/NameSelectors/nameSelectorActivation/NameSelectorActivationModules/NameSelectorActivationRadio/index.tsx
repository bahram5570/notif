import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { NameSelectorActivationRadioProps } from './types';

const NameSelectorActivationRadio = ({
  isSelected,
  subTitle,
  onClick,
  image,
  title,
}: NameSelectorActivationRadioProps) => {
  return (
    <div
      onClick={onClick}
      className={`
                  relative 
                  w-full 
                  cursor-pointer
                  ${image ? 'pt-2' : 'pt-0'}
                `}
    >
      <div
        className={`
                    w-full 
                    h-[54px] 
                    px-3 
                    rounded-2xl 
                    border-[1px] 
                    flex 
                    items-center 
                    gap-2
                    ${
                      isSelected
                        ? 'bg-impo_Pink_50 dark:bg-impo_Surface_SurfaceVariant border-impo_Primary_Primary'
                        : 'bg-impo_Neutral_Surface border-impo_Surface_SurfaceVariant'
                    }
                  `}
      >
        <div
          className={`
                      w-4 
                      h-4 
                      min-w-4 
                      min-h-4 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      border-[1px] 
                      p-[2px]
                      ${isSelected ? 'border-impo_Primary_Primary' : 'bg-impo_Transparent'}
                    `}
        >
          {isSelected && <div className="w-full h-full rounded-full bg-impo_Primary_Primary" />}
        </div>

        <div className="flex items-center gap-1">
          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {title}
          </CustomTypography>

          {isSelected && subTitle && (
            <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
              {subTitle}
            </CustomTypography>
          )}
        </div>

        {image && (
          <div className="absolute top-0 left-2 ">
            <CustomImage src={image} className="w-[72px] h-[54px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NameSelectorActivationRadio;
