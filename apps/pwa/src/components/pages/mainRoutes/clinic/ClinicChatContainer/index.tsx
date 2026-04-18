import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CHAT_HEADING_HEIGHT, RATING_QUERY_NAME } from '@repo/core/components/clinic';
import { ClinicChatFooter } from '@repo/core/components/clinic/ClinicChatFooter';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ChatHeading from './ChatHeading';
import ChatSkeleton from './ChatSkeleton';
import ChatsMessagesContainer from './ChatsMessagesContainer';
import RatingContainer from './RatingContainer';
import useGetData from './__hooks__/useGetData';

const ClinicChatContainer = () => {
  const { isLoading, data } = useGetData();
  const { getQueryParams } = useQueryParamsHandler();
  const isRateModalOpen = getQueryParams(RATING_QUERY_NAME) !== null;

  return (
    <>
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

      {isRateModalOpen && (
        <RatingContainer
          drName={data?.drName}
          isLoading={isLoading}
          drImage={data?.drImage}
          feedbacks={data?.feedbacks}
        />
      )}
    </>
  );
};

export default ClinicChatContainer;
