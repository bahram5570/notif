import DateFromIcon from '@assets/icons/dateFrom.svg';
import DateToIcon from '@assets/icons/dateTo.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import useDatesScript from './__hooks__/useDatesScript';
import { DateCheckupQestionPropsType } from './type';

const DateCheckupQuestion = ({ from, to }: DateCheckupQestionPropsType) => {
  const { fromScript, toScript } = useDatesScript({ from, to });

  return (
    <div className="rounded-xl flex flex-row bg-impo_Neutral_Background">
      <div className="px-3 py-1  w-full">
        <div className="flex flex-col   divide-y-[1px]">
          <div className="flex flex-row-reverse justify-between w-full p-3">
            <div className="flex items-center gap-1">
              <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
                تاریخ انجام
              </Dark_Typography>

              <DateFromIcon className="w-6 h-6 stroke-impo_Surface_OnSurfaceVariant" />
            </div>

            <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
              {fromScript}
            </Dark_Typography>
          </div>

          <div className="flex flex-row-reverse justify-between w-full p-3">
            <div className="flex items-center gap-1">
              <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Lable_Large">
                تاریخ انقضا
              </Dark_Typography>

              <DateToIcon className="w-6 h-6 stroke-impo_Surface_OnSurfaceVariant" />
            </div>

            <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
              {toScript}
            </Dark_Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateCheckupQuestion;
