'use client';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';

import TicketContainerSkeleton from './TicketContainerSkeleton';
import TicketList from './TicketList';
import WebView from './WebView';
import useGetDataCategory from './__hooks__/useGetDataCategory';

const SupportTicketsListPage = () => {
  const { data, dataLoading } = useGetDataCategory();

  return (
    <>
      <MainPageLayout
        rightElement="BackButton"
        className="bg-impo_Neutral_Surface"
        rightElementScript="پشتیبانی"
        leftElement2="ProfileSupportTicket"
        paddingTop={data && data.url ? HEADER_HEIGHT : 0}
      >
        {dataLoading && <TicketContainerSkeleton />}

        {!dataLoading && (
          <>
            {data && data.items.length > 0 && <TicketList {...data} />}
            {data && data.url && <WebView url={data.url} />}
          </>
        )}
      </MainPageLayout>
    </>
  );
};

export default SupportTicketsListPage;
