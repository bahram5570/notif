import { CategorizedRoutinResponseType } from '../__hooks__/useGetCategoriesRoutinData/type';

type ItemType = Pick<CategorizedRoutinResponseType, 'items'>['items'][0];

export interface CategoryItemPropsType extends ItemType {}
