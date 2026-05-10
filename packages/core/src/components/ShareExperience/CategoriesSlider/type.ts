import { SelectedCategoryHandlerTypes, ShareExperienceResponseTypes } from '../types';

export interface CategoriesSliderProps extends Pick<ShareExperienceResponseTypes, 'categories'> {
  selectedCategoryId: string;
  selectedCategoryHandler: SelectedCategoryHandlerTypes;
}
