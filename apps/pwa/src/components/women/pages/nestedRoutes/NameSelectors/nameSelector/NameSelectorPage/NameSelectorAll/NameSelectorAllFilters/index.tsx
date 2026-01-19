import Dark_Typography from '@components/ui/Dark_Typography';

import NameSelectorGenderFilter from './NameSelectorGenderFilter';
import NameSelectorStylesFilter from './NameSelectorStylesFilter';

const NameSelectorAllFilters = () => {
  return (
    <div className="w-full h-[56px] flex flex-row-reverse items-center gap-2">
      <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
        فیلترها:
      </Dark_Typography>

      <NameSelectorGenderFilter />
      <NameSelectorStylesFilter />
    </div>
  );
};

export default NameSelectorAllFilters;
