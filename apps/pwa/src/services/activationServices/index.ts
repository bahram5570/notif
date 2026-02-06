import { pwaHttp } from '@repo/core/utils/pwaHttp';

import { ActivationQuestionsDataTypes, ActivationResponseTypes } from './types';

export const fetchActivationData = async (url: string) => {
  const { data, error } = await pwaHttp<ActivationResponseTypes>({ url });
  const result: ActivationQuestionsDataTypes = { questionsData: { question: {}, reward: {} }, errorCode: null };

  if (data) {
    data.items.map((item) => {
      switch (item.type) {
        case 'Question':
          result.questionsData.question = { ...result.questionsData.question, [item.id]: item };
          break;

        case 'Reward':
          result.questionsData.reward = { ...result.questionsData.reward, [item.id]: item };
          break;
      }
    });
  }

  if (error) {
    result.errorCode = error.status;
  }

  return result;
};
