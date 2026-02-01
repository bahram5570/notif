import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { OptionButtonProps } from './types';

const OptionButton = ({ isSelected, text, onClick }: OptionButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`
                  w-full 
                  h-12 
                  flex 
                  items-center 
                  justify-end 
                  gap-2 
                  px-3 
                  border-[1px] 
                  rounded-lg 
                  cursor-pointer 
                  ${
                    isSelected
                      ? 'bg-impo_Pink_100 dark:bg-impo_Pink_800 border-impo_Primary_Primary'
                      : 'bg-impo_Neutral_Surface border-impo_Surface_SurfaceVariant'
                  }
                `}
    >
      <CustomTypography
        fontSize="Body_Medium"
        className={`text-impo_Neutral_OnBackground ${isSelected && '!text-impo_Black'} `}
      >
        {text.toString()}
      </CustomTypography>

      <div
        className={`
                    relative 
                    w-4 
                    h-4 
                    rounded-full 
                    border-[1px] 
                    ${isSelected ? 'border-impo_Primary_Primary' : 'border-impo_Surface_OutlineVariant'}
                  `}
      >
        {isSelected && (
          <div className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] p-[2px] rounded-full bg-impo_Primary_Primary" />
        )}
      </div>
    </div>
  );
};

export default OptionButton;
