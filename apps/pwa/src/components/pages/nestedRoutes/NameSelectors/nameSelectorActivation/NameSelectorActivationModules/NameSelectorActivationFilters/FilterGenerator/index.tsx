import Dark_Typography from '@components/ui/Dark_Typography';

import { FilterGeneratorProps } from './types';

const FilterGenerator = ({ subtitle, title, isSelected, onClick }: FilterGeneratorProps) => {
  return (
    <div
      onClick={onClick}
      className={`
                  flex 
                  justify-center 
                  items-center 
                  gap-1 
                  h-[40px] 
                  border-[1px] 
                  rounded-xl 
                  px-4 
                  cursor-pointer
                  ${
                    isSelected
                      ? 'bg-impo_Pink_50 dark:bg-impo_Surface_SurfaceVariant border-impo_Primary_Primary'
                      : 'bg-impo_Neutral_Background border-impo_Transparent'
                  }
                `}
    >
      <div className="overflow-hidden duration-300" style={{ maxWidth: isSelected ? 200 : 0 }}>
        <Dark_Typography fontSize="Body_Small" className={`text-impo_Neutral_OnBackground !whitespace-nowrap`}>
          {subtitle}
        </Dark_Typography>
      </div>

      <Dark_Typography fontSize="Body_Medium" className={`text-impo_Neutral_OnBackground !whitespace-nowrap`}>
        {title}
      </Dark_Typography>
    </div>
  );
};

export default FilterGenerator;
