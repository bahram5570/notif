import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@repo/core/utils/scripts';

import { MODALS } from '@constants/modals.constants';

import NameSelectorFilters from '../../../../NameSelectorFilters';
import useNameSelectorData from '../../../../__hooks__/useNameSelectorData';
import NameSelectorFilterResetBtn from '../NameSelectorFilterResetBtn';
import useNameSelectorFilterModals from '../__hooks__/useNameSelectorFilterModals';

const NameSelectorStylesFilter = () => {
  const { allFilters, resetFiltersHandler } = useNameSelectorData();
  const { isOpenHandler, isOpen, isLoading } = useNameSelectorFilterModals(MODALS.NAME_SELECTOR_FILTER_STYLES);

  const selectedFilters = allFilters.styles.length === 0 ? null : allFilters.styles;
  const btnScript = selectedFilters ? textShorter(selectedFilters.join(' ، '), 16) : 'نوع اسم';

  return (
    <>
      <div
        onClick={isOpenHandler}
        className={`
                    relative 
                    flex 
                    items-center 
                    h-8 
                    gap-1 
                    border-[1px] 
                    border-impo_Neutral_Surface
                    rounded-full
                    ${selectedFilters ? 'bg-impo_Surface_SurfaceVariant pr-[16px] pl-[6px]' : 'bg-impo_Neutral_Background px-[16px]'}
                  `}
      >
        {selectedFilters && (
          <>
            <NameSelectorFilterResetBtn onClick={() => resetFiltersHandler('styles')} />
            <div className="w-[1px] h-[20px] bg-impo_Surface_OutlineVariant" />
          </>
        )}

        <CustomTypography
          fontSize="Body_Small"
          className={`text-impo_Neutral_OnBackground ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        >
          {btnScript}
        </CustomTypography>

        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <CustomSpinner size={20} className="border-impo_Neutral_OnBackground" />
          </div>
        )}
      </div>

      <NameSelectorFilters isOpen={isOpen} inputType="styles" />
    </>
  );
};

export default NameSelectorStylesFilter;
