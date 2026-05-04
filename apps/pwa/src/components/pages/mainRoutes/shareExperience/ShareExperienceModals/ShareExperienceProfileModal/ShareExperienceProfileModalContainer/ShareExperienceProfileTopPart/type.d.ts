import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

type ProfileType = Pick<ProfileResponsePropsType, 'profile' | 'followCount' | 'storyCount' | 'isSelf' | 'isFollow'>;

export interface ShareExperienceProfileTopPartPropsType extends ProfileType {}
