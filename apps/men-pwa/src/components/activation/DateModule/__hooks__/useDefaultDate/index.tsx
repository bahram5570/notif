import { useEffect } from 'react';

import { addZero } from '@repo/core/utils/numbers';

import { DATE_SEPERATOR_REGEX } from '@repo/core/constants/date.constants';

import useStartEndDate from '../useStartEndDate';
import { UseDefaultDatePros } from './types';

const useDefaultDate = ({ defaultDate, onDefaultData }: UseDefaultDatePros) => {
  const { endDate } = useStartEndDate();

  useEffect(() => {
    const fullDate = (defaultDate || endDate).split(DATE_SEPERATOR_REGEX);

    const result = {
      year: fullDate[0].toString(),
      month: addZero(fullDate[1]),
      day: addZero(fullDate[2]),
    };

    onDefaultData(result);
  }, []);
};

export default useDefaultDate;
