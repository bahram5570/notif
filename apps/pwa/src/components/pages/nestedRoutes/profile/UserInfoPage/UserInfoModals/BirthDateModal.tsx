import { useEffect, useState } from 'react';

import CakeIcon from '@assets/icons/Cake.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { WheelPicker } from '@repo/core/components/ui/WheelPicker';
import { toGregorianData, toJalaliData } from '@utils/dates';

import useListsMaker from '@components/activation/DateModule/__hooks__/useListsMaker';
import { StateValuesHandlerTypes, ValuesTypes } from '@components/activation/DateModule/types';
import { CalendarTypeEnum, DATE_SEPERATOR_REGEX } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';

import { BirthDateModalTypes } from './types';

const BirthDateModal = ({ value, valueHandler, onClose }: BirthDateModalTypes) => {
  const { culture } = useCulture();
  const [values, setValues] = useState<ValuesTypes>({ month: '', year: '', day: '' });

  const { daysList, monthsList, yearsList } = useListsMaker({ values });

  const stateValuesHandler: StateValuesHandlerTypes = (v, name) => {
    setValues((state) => ({ ...state, [name]: v }));
  };

  const saveHandler = () => {
    let result = '';

    switch (culture.calendarType) {
      case CalendarTypeEnum.Gregorian:
        result = `${values.year}-${values.month}-${values.day}`;
        break;

      case CalendarTypeEnum.Jalali:
        result = toGregorianData(`${values.year}/${values.month}/${values.day}`);
        break;

      default:
        result = toGregorianData(`${values.year}/${values.month}/${values.day}`);
        break;
    }

    valueHandler(result);
    onClose();
  };

  useEffect(() => {
    if (value) {
      let updatedValue = value;

      switch (culture.calendarType) {
        case CalendarTypeEnum.Jalali:
          updatedValue = toJalaliData(value);
          break;
      }

      const birthDate = updatedValue.split(DATE_SEPERATOR_REGEX);

      setValues({
        month: birthDate[1],
        year: birthDate[0],
        day: birthDate[2],
      });
    }
  }, [value]);

  return (
    <>
      <CakeIcon className="w-9 h-9" />

      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        تاریخ تولد
      </CustomTypography>

      <div className="relative grid grid-cols-3 place-items-center w-full px-4 ">
        {daysList && monthsList && yearsList && (
          <>
            <span className="absolute left-0 right-0 h-10 pointer-events-none rounded-full bg-impo_Neutral_Surface " />

            <WheelPicker
              list={yearsList}
              defaultValue={values.year}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'year')}
            />

            <WheelPicker
              list={monthsList}
              defaultValue={values.month}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'month')}
            />

            <WheelPicker
              list={daysList}
              defaultValue={values.day}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'day')}
            />
          </>
        )}
      </div>

      <CustomButton onClick={saveHandler} fontSize="Lable_Large">
        ذخیره
      </CustomButton>
    </>
  );
};

export default BirthDateModal;
