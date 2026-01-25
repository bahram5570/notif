'use client';

import WomenPageLayout from '@components/WomenPageLayout';

import ChatsMessagesContainer from './ChatsMessagesContainer';
import ChatFooter from './ChatsMessagesContainer/ChatFooter';
import SupportTicketDetailSkeleton from './SupportTicketDetailSkeleton';
import useGetData from './__hooks__/useGetData';

const SupportTicketDetailPage = () => {
  const { data, isLoading } = useGetData();

  return (
    <>
      <WomenPageLayout rightElement="BackButton" rightElementScript="تیکت به پشتیبانی">
        {isLoading && <SupportTicketDetailSkeleton />}
        {!isLoading && (
          <>
            {!data && <></>}
            {data && (
              <>
                <ChatsMessagesContainer data={data} />
                <ChatFooter {...data} />
              </>
            )}
          </>
        )}
      </WomenPageLayout>
    </>
  );
};

export default SupportTicketDetailPage;
