import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { SexualStatusEnum } from './enum';

export type ProfileResponseTypes = {
  avatarImage: string;
  canDeleteAvatar: boolean;
  defaultAvatarImage: string;
  generalInfo: {
    name: string;
    birthdate: string;
    calendarType: CalendarTypeEnum;
    sexualStatus: SexualStatusEnum;
  };
  subscribtaion: {
    valid: boolean;
    currentDayCount: number;
  };
};
