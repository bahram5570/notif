import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

export type CategoriesListTypes = Pick<ShareExperienceResponseTypes, 'categories'>['categories'] | undefined;

export type SelectedCategoryHandlerTypes = (id: string, showAssociation: boolean) => void;
