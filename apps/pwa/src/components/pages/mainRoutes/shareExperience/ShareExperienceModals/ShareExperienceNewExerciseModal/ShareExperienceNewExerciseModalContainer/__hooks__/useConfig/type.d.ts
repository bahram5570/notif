import { AccessType } from '@repo/core/components/ShareExperience';

export type ConfigResponseType = AccessType & {
  sendEnable: boolean;
  toast: string;
  placeholder: string;
  showRegualtion: boolean;
  textRegualtion: string;
};
