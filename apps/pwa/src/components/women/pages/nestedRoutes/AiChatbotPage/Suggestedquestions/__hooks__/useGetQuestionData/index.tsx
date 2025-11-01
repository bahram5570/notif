import { useEffect } from 'react';

import useApi from '@hooks/useApi';

import { QuestionDataResponse, UseGetQuestionDataPropsType } from './type';

const useGetQuestionData = ({ messageId }: UseGetQuestionDataPropsType) => {
  const api = messageId ? `feature/ai/chat/question/${messageId}` : '';
  const { isLoading, data, callApi } = useApi<QuestionDataResponse>({
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
