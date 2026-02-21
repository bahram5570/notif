import SelectDateIcon from '@assets/icons/selectDate.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { currentDate } from '@utils/dates';

import CustomButton from '@components/ui/CustomButton';
import CustomWebModal from '@components/ui/CustomWebModal';
import DateSelector from '@components/ui/DateSelector';
import { useSystem } from '@repo/core/hooks/useSystem';
import m from 'moment-jalaali';

import { PREGNANCY_WEEKS_TOTAL_DAYS } from '../constants';
import useSelectedDate from './__hooks__/useSelectedDate';
import { DateModuleTypes } from './types';

const { gDate, jDate } = currentDate();
const mo = m(gDate, 'YYYY-MM-DD');
mo.subtract(PREGNANCY_WEEKS_TOTAL_DAYS - 1, 'days');
const startDate = mo.format('jYYYY/jMM/jDD') as `${string}/${string}/${string}`;

const DateModule = ({ submitHandler, isLoading }: DateModuleTypes) => {
  const { breakPoint } = useSystem();
  const { isOpen, isOpenHandler, currentDate, currentDateHandler, selectedDate, selectedDateHandler } =
    useSelectedDate();

  const position = breakPoint.mobile ? 'bottom' : 'center';
  const defaultDate = (currentDate || jDate) as `${string}/${string}/${string}`;

  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <CustomTypography fontSize="Body_Large" className="text-center">
          تاریخ آخرین پریودت رو بهمون بگو تا بهت سن بارداریت رو بگیم!
        </CustomTypography>

        <div
          onClick={() => isOpenHandler(true)}
          className="w-full sm:max-w-[460px] flex justify-between rounded-2xl p-4 mt-6 cursor-pointer bg-impo_White"
        >
          {selectedDate ? (
            <CustomTypography fontSize="Body_Large" className="!text-impo_Grey_800">
              {selectedDate}
            </CustomTypography>
          ) : (
            <CustomTypography fontSize="Body_Large" className="!text-impo_Grey_800">
              تاریخ آخرین پریود
            </CustomTypography>
          )}

          <SelectDateIcon className="w-6 h-auto stroke-impo_Grey_800" />
        </div>

        <CustomButton
          fontSize="Lable_Large"
          isLoading={isLoading}
          onClick={() => submitHandler(selectedDate)}
          style={{ pointerEvents: !selectedDate ? 'none' : 'auto' }}
          className=" h-[48px] w-full !mt-auto sm:max-w-[460px]"
        >
          محاسبه سن بارداری
        </CustomButton>
      </div>

      <CustomWebModal position={position} isOpen={isOpen} onClose={() => isOpenHandler(false)}>
        <div className="w-[100vw] max-w-[460px] flex flex-col items-center p-6 md:p-10 md:rounded-2xl bg-impo_White">
          <CustomTypography className="text-center">
            کاربر عزیز برای محاسبه اینکه توی هفته چندم بارداری هستی
          </CustomTypography>

          <CustomTypography fontSize="Lable_Large" className="text-center mt-2">
            تاریخ آخرین باری که پریود شدی رو بهمون بگو
          </CustomTypography>

          <DateSelector valueHandler={(v) => currentDateHandler(v)} startDate={startDate} defaultDate={defaultDate} />

          <CustomButton fontSize="Lable_Large" onClick={selectedDateHandler} className="!w-full !mt-2">
            انتخاب تاریخ
          </CustomButton>
        </div>
      </CustomWebModal>
    </>
  );
};

export default DateModule;
