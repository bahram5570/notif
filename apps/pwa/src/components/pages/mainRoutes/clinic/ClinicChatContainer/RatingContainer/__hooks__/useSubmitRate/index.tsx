import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { UseSubmitRateProps } from './types';

const useSubmitRate = ({ rate, description, feedbackValues }: UseSubmitRateProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { refetchQuery } = useCustomReactQuery();
  const router = useRouter();

  const ticketId = getQueryParams('ticketId');

  const successHandler = () => {
    refetchQuery({ queryKey: ['chats'] });

    const isModalOpen = getQueryParams(MODAL_QUERY_NAME) !== null;

    if (isModalOpen) {
      router.back();
      router.back();
    } else {
      router.back();
    }
  };

  const { callApi, isLoading: isRateLoading } = usePwaApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `advice/ticket/${ticketId}/DrRate`,
  });

  const submitHandler = () => {
    const payload = {
      rate,
      description,
      feedbackPositive: feedbackValues.feedbackPositive,
      feedbackNegative: feedbackValues.feedbackNegative,
    };

    callApi(payload);
  };

  return { submitHandler, isRateLoading };
};

export default useSubmitRate;
