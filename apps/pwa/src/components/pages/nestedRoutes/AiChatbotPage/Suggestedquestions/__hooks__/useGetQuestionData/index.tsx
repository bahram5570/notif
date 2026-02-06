import { useEffect } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { QuestionDataResponse, UseGetQuestionDataPropsType } from './type';

const useGetQuestionData = ({ messageId }: UseGetQuestionDataPropsType) => {
  const api = messageId ? `feature/ai/chat/question/${messageId}` : '';
  const { isLoading, data, callApi } = usePwaApi<QuestionDataResponse>({
    method: 'GET',
    api,
    queryKey: ['questionListData'],
    fetchOnMount: false,
  });

  useEffect(() => {
    if (api) {
      callApi();
    }
  }, [api]);

  const questions = data?.questions;

  return { questions, isLoading };
};

export default useGetQuestionData;
