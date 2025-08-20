import { ChallengeResponseType } from '../__hooks__/useGetData/type';

export type AvatarContainerPropsType = Pick<
  ChallengeResponseType,
  'manAvatar' | 'womanAvatar' | 'manName' | 'womanName' | 'valid' | 'canDeleteProfile'
>;
