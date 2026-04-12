import { useState } from 'react';

import { onSubmitType } from '@repo/core/components/ui/FeedbackModal';

import { RoutinResponseTypes } from '@components/pages/nestedRoutes/routin/RoutinContainer/__hooks__/useGetData/types';
import { ProgramRateStatusEnum } from '@components/pages/nestedRoutes/routin/enum';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { FeedbackDataType, UseFeedbackPropsType } from './type';

const useFeedback = ({ programId }: UseFeedbackPropsType) => {
  const route = useRouter();
  const { getQuery, updateQuery } = useCustomReactQuery();

  const [feedbackData, setFeedbackData] = useState<FeedbackDataType>({
    description: '',
    rate: 0,
    status: ProgramRateStatusEnum.None,
    title: '',
  });

  const data = getQuery<RoutinResponseTypes>({ queryKey: ['routinItems'] });

  const successHandler = () => {
    const newRateAvg = (feedbackData.rate + data?.rateAvg) / 2;
    const newCommentCount = feedbackData.description
      ? data?.commentCount
        ? data.commentCount + 1
        : 1
      : (data?.commentCount ?? 0);

    const payload = { ...data, rateAvg: newRateAvg, commentCount: newCommentCount };
    updateQuery({ queryKey: ['routinItems'], payload: payload });
    route.back();
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

  return { isLoading, rateHandler };
};

export default useFeedback;
