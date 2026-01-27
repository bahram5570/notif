import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

export type PeriodSettingsValuesTypes = Pick<ProfileResponseTypes, 'cycleLength' | 'periodLength'>;

export type PeriodSettingsValuesHandlerTypes = (
  name: keyof PeriodSettingsValuesTypes,
  value: PeriodSettingsValuesTypes[keyof PeriodSettingsValuesTypes],
) => void;
