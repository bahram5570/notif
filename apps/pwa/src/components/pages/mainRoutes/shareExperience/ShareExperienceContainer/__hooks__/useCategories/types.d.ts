import { ShareExperienceResponseTypes } from '../useShareExperienceGetData/types';

export type CategoriesListTypes = Pick<ShareExperienceResponseTypes, 'categories'>['categories'] | undefined;

export type SelectedCategoryHandlerTypes = (id: string, showAssociation: boolean) => void;
