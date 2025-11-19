'use client';

import Survey from '../components/SurveyEngine';
import { useSurvey } from '../components/SurveyEngine/useSurvey';

import { QUESTIONS } from '../constants';

const SurveyPage = () => {
  const survey = useSurvey(QUESTIONS);
  return <Survey survey={survey} nextRoute="/landing/blackFriday/reward" />;
};

export default SurveyPage;
