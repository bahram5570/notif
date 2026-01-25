import { useState } from 'react';

import { onSubmitType } from '@components/FeedbackModal/type';
import useApi from '@hooks/useApi';
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
