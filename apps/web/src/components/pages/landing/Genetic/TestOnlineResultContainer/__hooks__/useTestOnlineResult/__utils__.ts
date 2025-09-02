import {
  GENETIC_TEST_ONLINE_RESULTS_LIST,
  GENETIC_TEST_ONLINE_STEP_SESSION_SCORE_NAME,
} from '../../../TestOnlineContainer/constants';
import { GeneticTestOnlineSessionTypes } from '../../../TestOnlineContainer/types';

const getTotalScore = () => {
  let totalScore = 0;
  const scoreSession = sessionStorage.getItem(GENETIC_TEST_ONLINE_STEP_SESSION_SCORE_NAME);

  if (scoreSession) {
    const scoreSessionData = JSON.parse(scoreSession) as GeneticTestOnlineSessionTypes;
    const scoresList = Object.entries(scoreSessionData);

    scoresList.forEach((item) => {
      totalScore = totalScore + Number(item[1] || 0);
    });
  }

  return totalScore;
};

export const handleResult = () => {
  const totalScore = getTotalScore();

  if (totalScore > 185) {
    return GENETIC_TEST_ONLINE_RESULTS_LIST.result1;
  }

  if (totalScore <= 185 && totalScore >= 100) {
    return GENETIC_TEST_ONLINE_RESULTS_LIST.result2;
  }

  return GENETIC_TEST_ONLINE_RESULTS_LIST.result3;
};