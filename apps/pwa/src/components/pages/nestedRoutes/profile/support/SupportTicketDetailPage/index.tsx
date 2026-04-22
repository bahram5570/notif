'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import ChatsMessagesContainer from './ChatsMessagesContainer';
import ChatFooter from './ChatsMessagesContainer/ChatFooter';
import SupportTicketDetailSkeleton from './SupportTicketDetailSkeleton';
import useGetData from './__hooks__/useGetData';

const SupportTicketDetailPage = () => {
  const { data, isLoading } = useGetData();

  return (
    <>
      <MainPageLayout rightElement="BackButton" rightElementScript="تیکت به پشتیبانی" paddingTop={HEADER_HEIGHT + 16}>
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
