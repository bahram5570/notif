'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { ClinicCard } from '@repo/core/components/clinic';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ActiveTicketsHeading from './ActiveTicketsHeading';
import ActiveTicketsList from './ActiveTicketsList';
import ClinicSkeleton from './ClinicSkeleton';
import useGetData from './__hooks__/useGetData';

const MainPageClinicPage = () => {
  const { data, isLoading } = useGetData();

  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript="کلینیک سلامت"
      leftElement1="TicketsHistory"
      paddingBottom={80}
    >
      <div className="relative flex flex-col items-center gap-2 px-4 z-0">
        {isLoading && <ClinicSkeleton />}

        {!isLoading && (
          <>
            {data && (
              <>
                <ActiveTicketsHeading
                  tickets={data.tickets}
                  activeTicketsMore={data.activeTicketsMore}
                  activeTicketsOneTitle={data.activeTicketsOneTitle}
                />

                <CustomTypography fontSize="Headline_Small" className="text-impo_Neutral_OnBackground">
                  {data.title}
                </CustomTypography>

                {data.types.map((item, index) => (
                  <ClinicCard key={index} {...item} />
                ))}
              </>
            )}
          </>
        )}
      </div>
      <ActiveTicketsList tickets={data?.tickets} />
    </MainPageLayout>
  );
};

export default MainPageClinicPage;
