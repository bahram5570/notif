import { PartnerPageLayoutPropsType } from '../type';

export type BackgroundImagePropsType = Pick<
  PartnerPageLayoutPropsType,
  'coverImage' | 'isValid' | 'defaultCoverImage'
> & {};
