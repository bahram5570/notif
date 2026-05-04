import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

import { SelectedCategoryHandlerTypes } from '../__hooks__/useCategories/types';

export interface ShareExperienceCategoriesProps extends Pick<ShareExperienceResponseTypes, 'categories'> {
  selectedCategoryId: string;
  selectedCategoryHandler: SelectedCategoryHandlerTypes;
}
