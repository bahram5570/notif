'use client';

import MainPageLayout from '@components/MainPageLayout';
import InfiniteScrollContainer from '@components/infiniteScrollContainer';

import NotificationItem from './NotificationItem';
import useGetNotificationHistory from './__hooks__/useGetNotificationHistory';

const NotificationCenterPage = () => {
  const { notificationhistoryData, isLoading, pageNo, updatePageNo, totalCount } = useGetNotificationHistory();

  const hasData = notificationhistoryData && notificationhistoryData.items.length > 0;

  return (
    <MainPageLayout middleScript="پیام ها" rightElement="BackButton">
      <InfiniteScrollContainer
        isLoading={isLoading}
        pageNo={pageNo}
        pageSize={10}
        totalCount={totalCount}
        callBack={updatePageNo}
        height={'100dvh'}
        className="pb-4"
      >
        {isLoading && <div>Loading...</div>}
        {!hasData && !isLoading && <div>No notifications found.</div>}
        {hasData && !isLoading && (
          <div className="flex flex-col gap-3 px-4">
            {notificationhistoryData.items.map((item, index) => {
              return <NotificationItem key={index} {...item} />;
            })}
          </div>
        )}
      </InfiniteScrollContainer>
    </MainPageLayout>
  );
};

export default NotificationCenterPage;
