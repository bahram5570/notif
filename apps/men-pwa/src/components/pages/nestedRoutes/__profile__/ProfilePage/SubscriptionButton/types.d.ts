import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

type ItemsTypes = Pick<Pick<ProfileResponseTypes, 'subscribtaion'>['subscribtaion'], 'currentDayCount'>;
export interface SubscriptionButtonProps extends ItemsTypes {}
