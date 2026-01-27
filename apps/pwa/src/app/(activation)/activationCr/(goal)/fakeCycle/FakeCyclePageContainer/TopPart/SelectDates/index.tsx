import Dark_Button from '@components/ui/Dark_Button';

import SelectDatesTable from './SelectDatesTable';
import { SelectDatesProps } from './types';

const SelectDates = ({
  selectDatesBottomIcon,
  selectDatesBottomText,
  selectDatesTopText,
  selectDatesTopIcon,
  selectDatesBtnText,
  openDatesHandler,
  isPregnancy,
}: SelectDatesProps) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-3 pb-32 z-10" onClick={openDatesHandler}>
      <SelectDatesTable
        selectDatesBottomIcon={selectDatesBottomIcon}
        selectDatesBottomText={selectDatesBottomText}
        selectDatesTopText={selectDatesTopText}
        selectDatesTopIcon={selectDatesTopIcon}
        isPregnancy={isPregnancy}
      />

      <Dark_Button fontSize="Lable_Large" className="h-[48px]" onClick={() => {}} navigationLoadingId="SelectDates">
        {selectDatesBtnText}
      </Dark_Button>
    </div>
  );
};

export default SelectDates;
