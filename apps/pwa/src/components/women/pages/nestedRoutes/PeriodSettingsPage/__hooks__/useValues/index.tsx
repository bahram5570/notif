import { useEffect, useState } from 'react';

import useProfileData from '@hooks/__profile__/useProfileData';

import { PeriodSettingsValuesHandlerTypes, PeriodSettingsValuesTypes } from './types';

let initialValues: PeriodSettingsValuesTypes = { cycleLength: 0, periodLength: 0 };

const useValues = () => {
  const { isLoading: fetchDataLoading, profileData } = useProfileData();
  const [values, setValues] = useState<PeriodSettingsValuesTypes>(initialValues);

  useEffect(() => {
    if (profileData) {
      const result: PeriodSettingsValuesTypes = {
        cycleLength: profileData.cycleLength,
        periodLength: profileData.periodLength,
      };

      setValues(result);
      initialValues = result;
    }
  }, [profileData]);

  const valuesHandler: PeriodSettingsValuesHandlerTypes = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const isModified = !(
    values.cycleLength === initialValues.cycleLength && values.periodLength === initialValues.periodLength
  );

  return { fetchDataLoading, isModified, values, valuesHandler };
};

export default useValues;
