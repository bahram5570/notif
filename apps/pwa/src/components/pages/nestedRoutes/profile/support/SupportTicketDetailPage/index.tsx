'use client';

import MainPageLayout from '@components/MainPageLayout';

import ChatsMessagesContainer from './ChatsMessagesContainer';
import ChatFooter from './ChatsMessagesContainer/ChatFooter';
import SupportTicketDetailSkeleton from './SupportTicketDetailSkeleton';
import useGetData from './__hooks__/useGetData';

const SupportTicketDetailPage = () => {
  const { data, isLoading } = useGetData();

  return (
    <>
      <MainPageLayout rightElement="BackButton" rightElementScript="تیکت به پشتیبانی">
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
      </MainPageLayout>
    </>
  );
};

export default SupportTicketDetailPage;
