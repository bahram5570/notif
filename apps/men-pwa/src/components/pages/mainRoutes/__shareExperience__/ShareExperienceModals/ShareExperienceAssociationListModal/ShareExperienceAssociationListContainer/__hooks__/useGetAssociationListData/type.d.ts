export type AssociationType = {
  id: string;
  title: string;
  isFollowed: boolean;
  cover: string;
};

export type AssociationListResponseType = {
  totalCount: number;
  items: AssociationType[];
};
