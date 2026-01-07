'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import TicketContainerSkeleton from './TicketContainerSkeleton';
import TicketList from './TicketList';
import WebView from './WebView';
import useGetDataCategory from './__hooks__/useGetDataCategory';

const SupportTicketsListPage = () => {
  const { data, dataLoading } = useGetDataCategory();

  return (
    <>
      <WomenPageLayout
        rightElement="BackButton"
        className="bg-impo_Grey_50"
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
      </WomenPageLayout>
    </>
  );
};

export default SupportTicketsListPage;
