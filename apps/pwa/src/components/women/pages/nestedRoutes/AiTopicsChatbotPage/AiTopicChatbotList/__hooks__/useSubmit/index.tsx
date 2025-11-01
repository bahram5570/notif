import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  //   const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);
  const { getQueryParams } = useQueryParamsHandler();
  const itemIdData = getQueryParams('itemId');
  const categoryIdData = getQueryParams('categoryId');
  const route = useRouter();

  //   const aiChatData = getQuery<AiChatbotDataResponseType>({ queryKey: ['historyAiChat'] });

  //   const { streamHandler, messages } = useEventSource({
  //     handelLoading: setStreamLoading,
  //     errorHandler: setShowErrorMessage,
  //   });

  const successHandler = () => {
    route.push(`/protected/aiChatbot?itemId=${''}&categoryId=${''}`);
    //   updateQuery({
    //     queryKey: ['historyAiChat'],
    //     payload: {
    //       ...aiChatData,
    //       isActive: v.isActive,
    //       activeRating: v.activeRating,
    //       deactiveMessage: v.deactiveMessage,
    //       title: v.title,
    //       deactiveButton: v.deactiveButton,
    //     },
    //   });
    //   messageId = v.messageId;
    //   streamHandler({ id: v.messageId });
  };

  const { callApi, isLoading } = useApi({
    method: 'POST',
    api: 'feature/ai/v2/sendstreammessage',
    onSuccess: successHandler,
    // onSuccess: (v: NewMessageResponse) => successHandler(v),
    // onError: () => setStreamLoading(false),
  });

  const submitHandler = ({ prompt, categoryId }: { prompt: string; categoryId: string | undefined }) => {
    // if (showErrorMessage) setShowErrorMessage(false);
    // addChatHandler({ role: RoleEnum.User, text: prompt });
    const payload = {
      promptCategoryId: categoryId,
      promptItemId: itemIdData || '',
      prompt,
    };

    callApi(payload);
  };

  //   useEffect(() => {
  //     updateChatHandler(messages, messageId);
  //   }, [messages]);

  //   useEffect(() => {
  //     if (loading) setStreamLoading(true);
  //   }, [loading]);

  //   const isLoading = streamLoading;

  return { submitHandler, isLoading };
};

export default useSubmit;
