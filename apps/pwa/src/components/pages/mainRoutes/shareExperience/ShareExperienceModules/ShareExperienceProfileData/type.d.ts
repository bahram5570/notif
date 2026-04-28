import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

export type selfType = Pick<ProfileResponsePropsType, 'activities'>['activities'];

export type ShareExperienceProfileDataPropsType = {
  isSelf: boolean;
  experienceDataList: selfType | undefined;
  isLoading: boolean;
};
