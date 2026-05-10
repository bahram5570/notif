import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODALS } from '@constants/modals.constants';

import NameSelectorFilters from '../../../../NameSelectorFilters';
import useNameSelectorData from '../../../../__hooks__/useNameSelectorData';
import NameSelectorFilterResetBtn from '../NameSelectorFilterResetBtn';
import useNameSelectorFilterModals from '../__hooks__/useNameSelectorFilterModals';

const NameSelectorGenderFilter = () => {
  const { data, allFilters, resetFiltersHandler } = useNameSelectorData();
  const { isOpenHandler, isOpen, isLoading } = useNameSelectorFilterModals(MODALS.NAME_SELECTOR_FILTER_GENDER);

  const selectedFilter = data?.genderFilters.find((item) => item.value === allFilters.gender);
  const btnScript = selectedFilter ? selectedFilter.title : 'جنسیت';

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
                    ${selectedFilter ? 'bg-impo_Surface_SurfaceVariant pr-[16px] pl-[6px]' : 'bg-impo_Neutral_Background px-[16px]'}
                  `}
      >
        {selectedFilter && <NameSelectorFilterResetBtn onClick={() => resetFiltersHandler('gender')} />}

        <CustomTypography
          fontSize="Body_Small"
          className={`text-impo_Neutral_OnBackground ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        >
          {btnScript}
        </CustomTypography>

        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <CustomSpinner className="border-impo_Neutral_OnBackground" size={20} />
          </div>
        )}
      </div>

      <NameSelectorFilters isOpen={isOpen} inputType="gender" />
    </>
  );
};

export default NameSelectorGenderFilter;
