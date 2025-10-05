import { BlogsResponseTypes } from '@app/blogs/types';
import { ArticlesTypes } from '@app/types';

type CategoryTypes = Pick<ArticlesTypes, 'categories'>['categories'][0];
export interface CategoryResponseTypes extends CategoryTypes {}
