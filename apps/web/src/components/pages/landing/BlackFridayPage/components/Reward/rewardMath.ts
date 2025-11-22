import { Answers, RewardData, SubAnswers } from '../types';
import { REWARD_MAP } from './rewardMap';

export function computeReward(answers: Answers, subAnswers: SubAnswers): RewardData {
  const q1 = answers['q1'];
  const q1_sub = subAnswers['q1'] || 'none';
  const q2 = answers['q2'];

  const key = `${q1}-${q1_sub}-${q2}`;

  return (
    REWARD_MAP[key] || {
      title: '',
      description: '',
      image: '',
      discountCode: '',
    }
  );
}
