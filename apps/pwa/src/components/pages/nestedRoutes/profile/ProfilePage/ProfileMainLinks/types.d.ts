import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';
import { CyclePhaseEnum } from '@repo/core/providers/WidgetActionsProvider';

export interface ProfileMainLinksTypes extends Pick<
  ProfileResponseTypes,
  'isDelivery' | 'pregnancyDate' | 'hasTicketSupportActive'
> {
  phase?: CyclePhaseEnum;
}

export interface EditsCardTypes extends Pick<ProfileMainLinksTypes, 'isDelivery' | 'pregnancyDate' | 'phase'> {}

export interface SupportCardTypes extends Pick<ProfileMainLinksTypes, 'hasTicketSupportActive'> {}

export interface CardGeneratorTypes {
  Icon: Any;
  script: string;
  linkTo: string;
  backgroundColor: string;
}
