import { useEffect, useState } from 'react';

import useProfileData from '@hooks/__profile__/useProfileData';
import { SexualStatusEnum } from '@providers/ProfileProvider/__hooks__/useGetProfileData/enum';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { UserInfoValuesTypes, ValuesHandlerTypes } from './types';

let initialValues: UserInfoValuesTypes = {
  calendarType: CalendarTypeEnum.Jalali,
  name: '',
  birthdate: '',
  sexualStatus: SexualStatusEnum.NoSex,
};

const useValues = () => {
  const [values, setValues] = useState<UserInfoValuesTypes>(initialValues);
  const { isLoading: fetchProfileLoading, profileData } = useProfileData();

  useEffect(() => {
    if (profileData) {
      const result: UserInfoValuesTypes = {
        name: profileData.generalInfo.name,
        birthdate: profileData.generalInfo.birthdate,
        calendarType: profileData.generalInfo.calendarType,
        sexualStatus: profileData.generalInfo.sexualStatus,
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
    values.calendarType === initialValues.calendarType &&
    values.sexualStatus === initialValues.sexualStatus
  );

  return { fetchProfileLoading, isModified, values, valuesHandler };
};

export default useValues;
