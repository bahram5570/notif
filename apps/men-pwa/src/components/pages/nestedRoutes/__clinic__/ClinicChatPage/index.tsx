'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CHAT_HEADING_HEIGHT, ClinicChatFooter, RATING_QUERY_NAME } from '@repo/core/components/clinic';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ChatHeading from './ChatHeading';
import ChatSkeleton from './ChatSkeleton';
import ChatsMessagesContainer from './ChatsMessagesContainer';
import useGetData from './__hooks__/useGetData';

const ClinicChatPage = () => {
  const { data, isLoading } = useGetData();
  const { getQueryParams } = useQueryParamsHandler();
  const isRateModalOpen = getQueryParams(RATING_QUERY_NAME) !== null;

  return (
    <MainPageLayout
      paddingBottom={120}
      rightElement="BackButton"
      rightElementScript={data?.drName}
      paddingTop={HEADER_HEIGHT + CHAT_HEADING_HEIGHT + 16}
    >
      {isLoading && <ChatSkeleton />}

      {!isLoading && !isRateModalOpen && data && (
        <>
          <ChatHeading />
          <ChatsMessagesContainer data={data} />
          <ClinicChatFooter isRate={data.isRate} state={data.state} />
        </>
      )}
    </MainPageLayout>
  );
};

export default ClinicChatPage;
