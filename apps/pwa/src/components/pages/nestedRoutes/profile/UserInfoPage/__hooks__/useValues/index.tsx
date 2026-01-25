import { useEffect, useState } from 'react';

import { CalendarTypeEnum } from '@constants/date.constants';
import useProfileData from '@hooks/__profile__/useProfileData';

import { UserInfoValuesTypes, ValuesHandlerTypes } from './types';

let initialValues: UserInfoValuesTypes = { birthDate: '', calendarType: CalendarTypeEnum.Jalali, name: '', height: -1 };

const useValues = () => {
  const [values, setValues] = useState<UserInfoValuesTypes>(initialValues);
  const { isLoading: fetchProfileLoading, profileData } = useProfileData();

  useEffect(() => {
    if (profileData) {
      const result: UserInfoValuesTypes = {
        name: profileData.name,
        height: profileData.height,
        birthDate: profileData.birthDate,
        calendarType: profileData.calendarType,
      };

      setValues(result);
      initialValues = result;
    }
  }, [profileData]);

  const valuesHandler: ValuesHandlerTypes = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const isModified = !(
    values.name === initialValues.name &&
    values.height === initialValues.height &&
    values.birthDate === initialValues.birthDate &&
    values.calendarType === initialValues.calendarType
  );

  return { fetchProfileLoading, isModified, values, valuesHandler };
};

export default useValues;
