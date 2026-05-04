import { ExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

import { ShareExperienceExperiencesProps } from '../../types';

export type SelectedCategoryIdTypes = Pick<ShareExperienceExperiencesProps, 'selectedCategoryId'>['selectedCategoryId'];

export type QueryExperiencesDataTypes = Pick<ExperiencesResponseTypes, 'expirences'>;

export type ExperiencesDataTypes = QueryExperiencesDataTypes['expirences'];
