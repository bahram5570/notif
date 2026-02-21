import { AssociationListResponseType } from '../__hooks__/useGetAssociationListData/type';

export type ItemType = Pick<AssociationListResponseType, 'items'>['items'][0];

export type ShareExperienceAssociationItemPropsType = ItemType & {
  isLastItem: boolean;
};
