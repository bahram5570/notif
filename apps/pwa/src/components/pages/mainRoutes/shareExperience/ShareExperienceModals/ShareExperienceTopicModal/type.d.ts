import { ShareExperienceExperiencesProps } from '../../ShareExperienceContainer/ShareExperienceExperiences/types';

export interface QueryDataShareExperienceTopicModal {
  id: string;
  shareExperienceOrder: number;
}

type ProfileTypes = Pick<Pick<ShareExperienceExperiencesProps, 'profile'>['profile'], 'avatarImage'>;
export interface ShareExperienceTopicModalProps extends ProfileTypes {}
