import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { NotReadResponseType } from './type';

const useGetNotReadMessage = ({ valid }: { valid: boolean }) => {
  const { isLoading, data: MessageNumber } = usePwaApi<NotReadResponseType>({
    method: 'GET',
    queryKey: ['messageNotRead'],
    api: 'message/notread',
    fetchOnMount: valid,
  });

  return { isLoading, MessageNumber };
};

export default useGetNotReadMessage;
