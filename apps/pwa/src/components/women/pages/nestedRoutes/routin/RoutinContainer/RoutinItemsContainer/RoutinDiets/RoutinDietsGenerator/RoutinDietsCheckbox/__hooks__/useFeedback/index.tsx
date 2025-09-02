import { useState } from 'react';

import { onSubmitType } from '@components/women/FeedbackModal/type';
import { ProgramRateStatusEnum } from '@components/women/pages/nestedRoutes/routin/enum';
import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

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
