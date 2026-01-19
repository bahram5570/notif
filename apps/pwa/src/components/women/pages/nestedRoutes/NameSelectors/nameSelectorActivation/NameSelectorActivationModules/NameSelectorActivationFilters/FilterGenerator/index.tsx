import Dark_Typography from '@components/ui/Dark_Typography';
import useTheme from '@hooks/useTheme';

import { FilterGeneratorProps } from './types';

const FilterGenerator = ({ subtitle, title, isSelected, onClick }: FilterGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center gap-1 h-[40px] border-[1px] rounded-xl px-4 cursor-pointer`}
      style={{
        backgroundColor: isSelected ? colors.Pink_50 : colors.White,
        borderColor: isSelected ? colors.PrimaryWoman_Primary : colors.Transparent,
      }}
    >
      <div className="overflow-hidden duration-300" style={{ maxWidth: isSelected ? 200 : 0 }}>
        <Dark_Typography fontSize="Body_Small" className="text-impo_Black !whitespace-nowrap">
          {subtitle}
        </Dark_Typography>
      </div>

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Black !whitespace-nowrap">
        {title}
      </Dark_Typography>
    </div>
  );
};

export default FilterGenerator;
