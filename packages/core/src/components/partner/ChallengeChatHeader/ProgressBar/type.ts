import { ChallengeChatHeaderPropsType } from '../type';

export type ProgressBarPropsType = Pick<ChallengeChatHeaderPropsType, 'progress' | 'avatar' | 'partnerAvatar'> & {
  className?: string;
};
