'use client';

import Reward from '../components/Reward';
import { useSurvey } from '../components/SurveyEngine/useSurvey';

import { QUESTIONS } from '../constants';

const RewardPage = () => {
  const { answers, subAnswers, isLoaded } = useSurvey(QUESTIONS);
  return <Reward answers={answers} subAnswers={subAnswers} isLoaded={isLoaded} />;
};

export default RewardPage;
