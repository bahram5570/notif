import { useState } from 'react';

import { ProgramRateStatusEnum } from '@repo/core/components/Routin/RoutinFooter';
import { onSubmitType } from '@repo/core/components/ui/FeedbackModal';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

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

  const { callApi, isLoading } = usePwaApi({
    api: 'widgets/manprogram/rate',
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
