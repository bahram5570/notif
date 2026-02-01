import DateFromIcon from '@assets/icons/dateFrom.svg';
import DateToIcon from '@assets/icons/dateTo.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useDatesScript from './__hooks__/useDatesScript';
import { DateCheckupQestionPropsType } from './type';

const DateCheckupQuestion = ({ from, to }: DateCheckupQestionPropsType) => {
  const { fromScript, toScript } = useDatesScript({ from, to });

  return (
    <div className="rounded-xl flex flex-row bg-impo_Neutral_Background">
      <div className="px-3 py-1  w-full">
        <div className="flex flex-col   ">
          <div className="flex flex-row-reverse justify-between w-full p-3 border-b border-b-impo_Neutral_Surface">
            <div className="flex items-center gap-1">
              <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
                تاریخ انجام
              </CustomTypography>

              <DateFromIcon className="w-6 h-6 stroke-impo_Surface_OnSurfaceVariant" />
            </div>

            <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
              {fromScript}
            </CustomTypography>
          </div>

          <div className="flex flex-row-reverse justify-between w-full p-3">
            <div className="flex items-center gap-1">
              <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Lable_Large">
                تاریخ انقضا
              </CustomTypography>

              <DateToIcon className="w-6 h-6 stroke-impo_Surface_OnSurfaceVariant " />
            </div>

            <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
              {toScript}
            </CustomTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateCheckupQuestion;
