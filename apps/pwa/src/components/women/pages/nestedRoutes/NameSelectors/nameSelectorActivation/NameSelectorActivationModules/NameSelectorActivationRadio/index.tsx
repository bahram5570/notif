import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

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
                    ${isSelected ? 'bg-impo_Pink_50 dark:bg-impo_Transparent' : 'bg-impo_Neutral_Background'}
                    ${isSelected ? 'border-impo_Primary_Primary' : 'bg-impo_Transparent'}
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
          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {title}
          </Dark_Typography>

          {isSelected && subTitle && (
            <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
              {subTitle}
            </Dark_Typography>
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
