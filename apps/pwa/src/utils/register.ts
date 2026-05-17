import { currentDate, toGregorianData } from '@repo/core/utils/dates';
import { toEnglishNumbers } from '@repo/core/utils/numbers';

import { ActivationPayloadKeysTypes, ActivationPayloadTypes } from '@providers/__activation__/types';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

const { gDate } = currentDate();

export const registerPayloadUpdater = (payload: ActivationPayloadTypes, calendarType: CalendarTypeEnum) => {
  const result = { ...payload };

  Object.keys(result).forEach((k) => {
    const key = k as ActivationPayloadKeysTypes;

    if (result[key] === -1) {
      delete result[key];
    }
  });

  result.identity = toEnglishNumbers(result.identity);

  if (calendarType === CalendarTypeEnum.Jalali) {
    result.childBirthDate = result.childBirthDate === '' ? '' : toGregorianData(result.childBirthDate);
    result.pregnancyDate = result.pregnancyDate === '' ? '' : toGregorianData(result.pregnancyDate);
    result.birthDate = result.birthDate === '' ? '' : toGregorianData(result.birthDate);
  }

  if (result.birthDate === '') {
    result.birthDate = gDate;
  }

  return { updatedPayload: result };
};
