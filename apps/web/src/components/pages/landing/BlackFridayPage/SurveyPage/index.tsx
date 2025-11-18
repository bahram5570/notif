'use client';

import Survey from '../components/SurveyEngine/Survey';
import { useSurvey } from '../components/SurveyEngine/useSurvey';

import { QUESTIONS } from '../constants';

const SurveyPage = () => {
  const survey = useSurvey(QUESTIONS);
  return <Survey survey={survey} nextRoute="/reward" />;
};

export default SurveyPage;
