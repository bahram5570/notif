import { MainPageLayout } from '@repo/core/components/MainPageLayout';

const ClinicChatPage = () => {
  return (
    <MainPageLayout
      paddingBottom={120}
      rightElement="BackButton"
      //   rightElementScript={data?.drName}
      //   paddingTop={HEADER_HEIGH + CHAT_HEADING_HEIGHT + 16}
    >
      <div></div>
      {/* {isLoading && <ChatSkeleton />}

      {!isLoading && !isRateModalOpen && data && (
        <>
          <ChatHeading />
          <ChatsMessagesContainer data={data} />
          <ChatFooter isRate={data.isRate} state={data.state} />
        </>
      )} */}
    </MainPageLayout>
  );
};

export default ClinicChatPage;
