import { ShareExperienceExperiencesProps } from '../../ShareExperiencePage/ShareExperienceExperiences/types';

type ProfileTypes = Pick<Pick<ShareExperienceExperiencesProps, 'profile'>['profile'], 'avatarImage'>;
export interface ShareExperienceTopicModalProps extends ProfileTypes {}
