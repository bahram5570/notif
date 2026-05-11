import { AccessType } from '@repo/core/components/ShareExperience';

export type UseGetAssociationInfoPropsType = {
  associationId: string | undefined;
};

export type AssociationInfoResponseType = AccessType & {
  isFollowed: boolean;
  followerCount: number;
  experienceCount: number;
  title: string;
  description: string;
  cover: string;
};
