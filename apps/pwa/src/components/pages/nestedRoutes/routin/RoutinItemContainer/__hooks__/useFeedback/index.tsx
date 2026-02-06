import { useState } from 'react';

import { onSubmitType } from '@components/FeedbackModal/type';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { ProgramRateStatusEnum } from '../../../enum';
import { FeedbackDataType, UseFeedbackPropsType } from './type';

const useFeedback = ({ programId }: UseFeedbackPropsType) => {
  const route = useRouter();
  const [feedbackData, setFeedbackData] = useState<FeedbackDataType>({
    description: '',
    rate: 0,
    status: ProgramRateStatusEnum.None,
    title: '',
  });

  const successHandler = () => {
    route.back();
    setTimeout(() => {
      route.back();
    }, 0);
  };

  const { callApi, isLoading } = usePwaApi({
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
