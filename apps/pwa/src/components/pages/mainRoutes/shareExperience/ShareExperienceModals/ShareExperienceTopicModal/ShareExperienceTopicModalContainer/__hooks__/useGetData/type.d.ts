import { TopicExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

export type useGetDataPropsType = {
  // ref: React.RefObject<HTMLDivElement>;
  topicId: string | undefined;
};

export type QueryExperiencesDataTypes = Pick<TopicExperiencesResponseTypes, 'expirences'>;

export type ExperiencesDataTypes = QueryExperiencesDataTypes['expirences'];

export type TopicInformationTypes = Pick<TopicExperiencesResponseTypes, 'coverImage' | 'name' | 'inputText' | 'bio'>;
