import Dark_Typography from '@components/ui/Dark_Typography';

import { SelectDatesTableProps } from './types';

const SelectDatesTable = ({
  selectDatesBottomText,
  selectDatesBottomIcon,
  selectDatesTopText,
  selectDatesTopIcon,
  isPregnancy,
}: SelectDatesTableProps) => {
  return (
    <div className="w-full rounded-xl bg-impo_Neutral_Background select-none overflow-hidden">
      <div className="w-full flex justify-between px-4 py-5">
        {selectDatesTopIcon}

        <Dark_Typography fontSize="Body_Large" className="text-impo_Surface_Outline">
          {selectDatesTopText}
        </Dark_Typography>
      </div>

      <div className="relative w-full h-[1px] bg-impo_Neutral_Surface">
        {isPregnancy && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_Background px-2">
              یا
            </Dark_Typography>
          </div>
        )}
      </div>

      <div className="w-full flex justify-between px-4 py-5">
        {selectDatesBottomIcon}

        <Dark_Typography fontSize="Body_Large" className="text-impo_Surface_Outline">
          {selectDatesBottomText}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default SelectDatesTable;
