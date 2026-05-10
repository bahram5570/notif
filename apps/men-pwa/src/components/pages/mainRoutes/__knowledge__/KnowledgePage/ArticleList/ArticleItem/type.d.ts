import { ArticleListPropsType } from '../type';

type ItemType = Pick<ArticleListPropsType, 'items'>['items'][0];
export type ArticleItemPropsType = ItemType & {};
