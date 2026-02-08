import { toGregorianData } from '@repo/core/utils/dates';

import { ActivationPayloadTypes } from '@providers/__activation__/types';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

export const phaseChangePayloadUpdater = (payload: ActivationPayloadTypes, calendarType: CalendarTypeEnum) => {
  const copyPayload = { ...payload };

  if (calendarType === CalendarTypeEnum.Jalali) {
    copyPayload.childBirthDate =
      copyPayload.childBirthDate.trim() === '' ? '' : toGregorianData(copyPayload.childBirthDate);

    copyPayload.pregnancyDate =
      copyPayload.pregnancyDate.trim() === '' ? '' : toGregorianData(copyPayload.pregnancyDate);

    copyPayload.birthDate = copyPayload.birthDate.trim() === '' ? '' : toGregorianData(copyPayload.birthDate);
  }

  const result = Object.fromEntries(Object.entries(copyPayload).filter(([_, value]) => value !== -1));

  return result;
};
