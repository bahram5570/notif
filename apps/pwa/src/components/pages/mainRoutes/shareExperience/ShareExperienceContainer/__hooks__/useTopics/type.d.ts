import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

export type TopicsListTypes = Pick<ShareExperienceResponseTypes, 'topics'>['topics'] | undefined;
