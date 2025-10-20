'use client';

import AiChatbotFooter from './AiChatbotFooter';
import AiChatbotLayout from './AiChatbotLayout';
import AiChatbotMessageList from './AiChatbotMessageList';
import AiChatbotSkeleton from './AiChatbotSkeleton';
import EmptyState from './EmptyState';
import useGetHistoryChatData from './__hooks__/useGetHistoryChatData';
import useSubmit from './__hooks__/useSubmit-1';

const AiChatbotContainer = () => {
  const { aiChatData, aiChatbotList, addChatHandler, historyLoading, updateChatHandler } = useGetHistoryChatData();
  const { submitHandler, isLoading } = useSubmit({ addChatHandler, updateChatHandler });
  const NotChatData = aiChatData && aiChatbotList.length <= 0;

  return (
    <>
      {historyLoading && <AiChatbotSkeleton />}
      {!historyLoading && (
        <AiChatbotLayout chatTitle={aiChatData?.chatTitle}>
          <>
            {NotChatData && (
              <EmptyState
                emptyStateMessage={aiChatData?.emptyStateMessage}
                emptyStateTitle={aiChatData?.emptyStateTitle}
              />
            )}
            {!NotChatData && <AiChatbotMessageList chats={aiChatbotList} isLoading={isLoading} />}

            {aiChatData && <AiChatbotFooter {...aiChatData} submitHandler={submitHandler} isLoading={isLoading} />}
          </>
        </AiChatbotLayout>
      )}
    </>
  );
};

export default AiChatbotContainer;
