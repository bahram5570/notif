'use client';

import Reward from '../components/Reward/Reward';
import { useSurvey } from '../components/SurveyEngine/useSurvey';

import { QUESTIONS } from '../constants';

const RewardPage = () => {
  const { answers, subAnswers } = useSurvey(QUESTIONS);
  return <Reward answers={answers} subAnswers={subAnswers} />;
};

export default RewardPage;
