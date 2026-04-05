import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

type ItemsTypes = Pick<ProfileResponseTypes, 'generalInfo'>['generalInfo'];
export type UserInfoValuesTypes = Pick<ItemsTypes, 'name' | 'birthdate' | 'calendarType' | 'sexualStatus'> & {};

export type ValuesHandlerTypes = (
  name: keyof UserInfoValuesTypes,
  value: UserInfoValuesTypes[keyof UserInfoValuesTypes],
) => void;
