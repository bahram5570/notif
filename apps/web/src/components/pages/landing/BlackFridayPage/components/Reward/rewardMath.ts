import { Answers, RewardData, SubAnswers } from '../types';

export const IMAGE_MAP: Record<string, string> = {};
export const DESCRIPTION_MAP: Record<string, string> = {};
export const TITLE_MAP: Record<string, string> = {};
export const CODE_MAP: Record<string, string> = {};

export function computeReward(answers: Answers, subAnswers: SubAnswers): RewardData {
  const q1 = answers['q1'];
  const q1_sub = subAnswers['q1'] || 'none';
  const q2 = answers['q2'];

  const key12 = `${q1}-${q1_sub}-${q2}`;
  const key4 = `${q1}`;

  return {
    image: IMAGE_MAP[key12],
    description: DESCRIPTION_MAP[key12],
    title: TITLE_MAP[key4],
    discountCode: CODE_MAP[key4],
  };
}
