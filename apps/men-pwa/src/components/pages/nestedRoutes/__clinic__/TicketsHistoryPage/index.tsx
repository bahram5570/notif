'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { ClinicTicketGenerator } from '@repo/core/components/clinic';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import ClinicTicketsHistorySkeleton from './ClinicTicketsHistorySkeleton';
import EmptyList from './EmtpyList';
import useGetData from './__hooks__/useGetData';

const TicketsHistoryPage = () => {
  const { isLoading, data } = useGetData();

  const isEmptyList = data?.tickets.length === 0;

  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript="تاریخچه مشاوره ها"
      className="px-4 !pb-10"
      paddingTop={HEADER_HEIGHT + 16}
    >
      <>
        {isLoading && <ClinicTicketsHistorySkeleton />}

        {!isLoading && data && (
          <>
            <div className="relative flex flex-col gap-3 z-0">
              {isEmptyList && <EmptyList />}

              {!isEmptyList && (
                <>
                  {data.tickets.map((ticket, index) => (
                    <ClinicTicketGenerator
                      drSpeciality={ticket.drSpeciality}
                      createTime={ticket.createTime}
                      ticketId={ticket.ticketId}
                      drImage={ticket.drImage}
                      drName={ticket.drName}
                      stylingTypes="lists"
                      state={ticket.state}
                      text={ticket.text}
                      rate={ticket.rate}
                      ticketType={-1} // # Fake data
                      fileName={''} // # Fake data
                      key={index}
                    />
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </>
    </MainPageLayout>
  );
};

export default TicketsHistoryPage;
