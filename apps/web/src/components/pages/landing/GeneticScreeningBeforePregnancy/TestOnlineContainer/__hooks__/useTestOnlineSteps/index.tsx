import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { GENETIC_TEST_ONLINE_QUESTION_LIST, GENETIC_TEST_ONLINE_STEP_QUERY_NAME } from '../../constants';
import { GeneticTestOnlineQuestionListTypes } from '../../types';

const useTestOnlineSteps = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const queryStep = getQueryParams(GENETIC_TEST_ONLINE_STEP_QUERY_NAME) || '0';
  const currentStep = queryStep as keyof GeneticTestOnlineQuestionListTypes;
  const data = GENETIC_TEST_ONLINE_QUESTION_LIST[currentStep];

  return { currentStep, data };
};

export default useTestOnlineSteps;
