import { ShareExperienceExperiencesProps } from '../../ShareExperienceContainer/ShareExperienceExperiences/types';

type ProfileTypes = Pick<Pick<ShareExperienceExperiencesProps, 'profile'>['profile'], 'avatarImage'>;
export interface ShareExperienceTopicModalProps extends ProfileTypes {}
