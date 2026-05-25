import { AccessType } from '@repo/core/components/ShareExperience';

export type AssociationType = {
  id: string;
  title: string;
  isFollowed: boolean;
  cover: string;
};

export type AssociationListResponseType = AccessType & {
  totalCount: number;
  items: AssociationType[];
};
