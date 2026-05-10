'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import useGetCategoryData from '../__hooks__/useGetCategoryData';
import useGetTicketsData from '../__hooks__/useGetTicketsData';
import useSupportTabs from '../__hooks__/useSupportTabs';
import { SupportTabsEnum } from '../__hooks__/useSupportTabs/Enum';
import SupportMainTabContents from './SupportMainTabContents';
import SupportPageSkeleton from './SupportPageSkeleton';
import SupportTabs from './SupportTabs';
import SupportTicketsTabContents from './SupportTicketsTabContents';

const SupportPage = () => {
  const { tab, supportTabHandler } = useSupportTabs();
  const { categoryLoading, categoryData } = useGetCategoryData();
  const { ticketsLoading, ticketsData, hadPendingTicket, pageNo, ticketsPageNoHandler } = useGetTicketsData();

  const isLoading = categoryLoading || Boolean(ticketsLoading && !ticketsData);

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="پشتیبانی" className="px-4">
      {isLoading && <SupportPageSkeleton />}

      {categoryData && ticketsData && (
        <>
          <SupportTabs tab={tab} supportTabHandler={supportTabHandler} hadPendingTicket={hadPendingTicket} />

          {tab === SupportTabsEnum.Main && <SupportMainTabContents {...categoryData} />}

          {tab === SupportTabsEnum.Tickets && (
            <SupportTicketsTabContents
              {...ticketsData}
              pageNo={pageNo}
              isLoading={ticketsLoading}
              ticketsPageNoHandler={ticketsPageNoHandler}
            />
          )}
        </>
      )}
    </MainPageLayout>
  );
};

export default SupportPage;
