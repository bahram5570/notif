'use client';

import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import NotificationCenterSkeleton from './NotificationCenterSkeleton';
import NotificationEmptyState from './NotificationEmptyState';
import NotificationItem from './NotificationItem';
import useGetNotificationHistory from './__hooks__/useGetNotificationHistory';

const NotificationCenterPage = () => {
  const { notificationhistoryData, isLoading, pageNo, updatePageNo, totalCount, firstLoading } =
    useGetNotificationHistory();

  const hasData = notificationhistoryData && notificationhistoryData.items.length > 0;
  const infiniteScrollLoading = isLoading && !firstLoading;

  return (
    <>
      <MainPageLayoutHeader middleScript="پیام ها" rightElement="BackButton" />
      <InfiniteScrollContainer
        isLoading={infiniteScrollLoading}
        pageNo={pageNo}
        pageSize={10}
        totalCount={totalCount}
        callBack={updatePageNo}
        height={'100dvh'}
        className="pb-4"
        style={{ paddingTop: HEADER_HEIGHT + 10 }}
      >
        {firstLoading && <NotificationCenterSkeleton />}
        {!hasData && !firstLoading && <NotificationEmptyState />}
        {hasData && !firstLoading && (
          <div className="flex flex-col gap-3 px-4">
            {notificationhistoryData.items.map((item, index) => {
              return <NotificationItem key={index} {...item} />;
            })}
          </div>
        )}
      </InfiniteScrollContainer>
    </>
  );
};

export default NotificationCenterPage;
