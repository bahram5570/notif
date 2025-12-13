import { RewardTypes } from '@services/activationServices/types';

export type RegisterResponseTypes = {
  token: string;
  pair: boolean;
  result: boolean;
  reward: RewardTypes;
};

export type NotificationRewardTypes = Pick<RewardTypes, 'page'>['page'];
