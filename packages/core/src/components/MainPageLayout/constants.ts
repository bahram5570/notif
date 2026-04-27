import {
  BackButtonIconComponent,
  BackToSubscriptionIconComponent,
  CalendarIconComponent,
  InfoIconComponent,
  LinkToMainPageComponent,
  NotificationIconComponent,
  PregnancyCheckupBackButtonIconComponent,
  PrifileIconComponent,
  ProfileTicketsHistory,
  TicketsHistoryIconComponent,
} from './IconComponents';
import { HeaderIconEnums } from './enums';
import { IconsListTypes } from './types';

export const HEADER_ELEMENT_SIZE = 40;

export const iconsList: IconsListTypes = {
  [HeaderIconEnums.Info]: InfoIconComponent,
  [HeaderIconEnums.Profile]: PrifileIconComponent,
  [HeaderIconEnums.Calendar]: CalendarIconComponent,
  [HeaderIconEnums.BackButton]: BackButtonIconComponent,
  [HeaderIconEnums.LinkToMainPage]: LinkToMainPageComponent,
  [HeaderIconEnums.Notification]: NotificationIconComponent,
  [HeaderIconEnums.TicketsHistory]: TicketsHistoryIconComponent,
  [HeaderIconEnums.ProfileSupportTicket]: ProfileTicketsHistory,
  [HeaderIconEnums.BackToSubscription]: BackToSubscriptionIconComponent,
  [HeaderIconEnums.PregnancyCheckupBackButton]: PregnancyCheckupBackButtonIconComponent,
};
