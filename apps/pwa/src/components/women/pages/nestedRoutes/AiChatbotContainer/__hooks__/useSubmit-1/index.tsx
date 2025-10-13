import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import useEventSource from '../useEventSource';
import { RoleEnum } from '../useGetHistoryChatData/enum';
import { HistoryChatResponsiveType } from '../useGetHistoryChatData/type';
import { SuccessResponseType, UseSubmitPropsType } from './type';

const useSubmit = ({ addChatHandler }: UseSubmitPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);
  const { streamHandler, streamLoading } = useEventSource({ addChatHandler });

  const aiChatData = getQuery<HistoryChatResponsiveType>({ queryKey: ['historyAiChat'] });

  const successHandler = (v: SuccessResponseType) => {
    updateQuery({
      queryKey: ['historyAiChat'],
      payload: {
        ...aiChatData,
        isActive: v.isActive,
        activeRating: v.activeRating,
        deactiveMessage: v.deactiveMessage,
        title: v.title,
        deactiveButton: v.deactiveButton,
      },
    });

    setTimeout(() => {
      streamHandler({ id: v.messageId });
    }, 10000);
  };

  const {
    data,
    isLoading: loading,
    callApi,
  } = useApi<SuccessResponseType>({
    api: 'feature/ai/sendstreammessage',
    method: 'POST',
    onSuccess: (v: SuccessResponseType) => successHandler(v),
  });

  const submitHandler = (text: string) => {
    addChatHandler({ role: RoleEnum.User, text });
    const payload = {
      prompt: text,
    };

    callApi(payload);
  };

  const isLoading = loading || streamLoading;

  return { submitHandler, isLoading, data };
};

export default useSubmit;
