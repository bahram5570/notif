import { useState } from 'react';

import { onSubmitType } from '@components/women/FeedbackModal/type';
import useApi from '@hooks/useApi';

import { ProgramRateStatusEnum } from '../../../enum';
import { FeedbackDataType, UseFeedbackPropsType } from './type';

const useFeedback = ({ programId, onComplete }: UseFeedbackPropsType) => {
  const [feedbackData, setFeedbackData] = useState<FeedbackDataType>({
    description: '',
    rate: 0,
    status: ProgramRateStatusEnum.None,
    title: '',
  });

  const successHandler = () => {
    onComplete();
  };

  const { callApi, isLoading } = useApi({
    api: 'widgets/program/rate',
    method: 'POST',
    onSuccess: successHandler,
  });

  const rateHandler: onSubmitType = ({ description, rate }) => {
    const payload = {
      programId: programId,
      comment: description,
      rate,
    };

    setFeedbackData({ description, rate, status: ProgramRateStatusEnum.Complete, title: '' });
    callApi(payload);
  };

  return { isLoading, rateHandler, feedbackData };
};

export default useFeedback;
