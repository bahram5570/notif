import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import NameSelectorGenderFilter from './NameSelectorGenderFilter';
import NameSelectorStylesFilter from './NameSelectorStylesFilter';

const NameSelectorAllFilters = () => {
  return (
    <div className="w-full h-[56px] flex flex-row-reverse items-center gap-2">
      <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
        فیلترها:
      </CustomTypography>

      <NameSelectorGenderFilter />
      <NameSelectorStylesFilter />
    </div>
  );
};

export default NameSelectorAllFilters;
