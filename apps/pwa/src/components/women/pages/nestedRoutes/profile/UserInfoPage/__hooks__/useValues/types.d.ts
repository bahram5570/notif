import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

export type UserInfoValuesTypes = Pick<ProfileResponseTypes, 'name' | 'birthDate' | 'calendarType'> & {};

export type ValuesHandlerTypes = (
  name: keyof UserInfoValuesTypes,
  value: UserInfoValuesTypes[keyof UserInfoValuesTypes],
) => void;
