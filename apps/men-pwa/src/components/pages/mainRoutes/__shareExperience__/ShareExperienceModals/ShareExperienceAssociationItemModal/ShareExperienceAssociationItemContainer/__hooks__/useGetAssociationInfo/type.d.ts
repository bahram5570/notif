export type UseGetAssociationInfoPropsType = {
  associationId: string | undefined;
};

export type AssociationInfoResponseType = {
  isFollowed: boolean;
  followerCount: number;
  experienceCount: number;
  title: string;
  description: string;
  cover: string;
};
