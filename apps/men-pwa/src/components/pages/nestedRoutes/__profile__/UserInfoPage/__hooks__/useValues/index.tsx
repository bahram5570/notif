import { useEffect, useState } from 'react';

import useProfileData from '@hooks/__profile__/useProfileData';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { UserInfoValuesTypes, ValuesHandlerTypes } from './types';

let initialValues: UserInfoValuesTypes = { calendarType: CalendarTypeEnum.Jalali, name: '', birthdate: '' };

const useValues = () => {
  const [values, setValues] = useState<UserInfoValuesTypes>(initialValues);
  const { isLoading: fetchProfileLoading, profileData } = useProfileData();

  useEffect(() => {
    if (profileData) {
      const result: UserInfoValuesTypes = {
        name: profileData.generalInfo.name,
        birthdate: profileData.generalInfo.birthdate,
        calendarType: profileData.generalInfo.calendarType,
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
    values.birthdate === initialValues.birthdate &&
    values.calendarType === initialValues.calendarType
  );

  return { fetchProfileLoading, isModified, values, valuesHandler };
};

export default useValues;
