import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import TicketText from '../SupportTicketsListPage/TicketText';
import TicketHistorySkeleton from './TicketHistorySkeleton';
import useGetData from './__hooks__/useGetData';

const SupportTicketHistoryPage = () => {
  const { data, isLoading } = useGetData();

  return (
    <MainPageLayout
      paddingBottom={96}
      paddingTop={80}
      rightElement="BackButton"
      rightElementScript="سابقه تیکت ها"
      className="flex flex-col items-end p-3 gap-3 bg-impo_Neutral_Surface"
    >
      {isLoading && <TicketHistorySkeleton />}
      {!isLoading && (
        <>
          {!data && <></>}
          {data && (
            <>
              <CustomTypography className="text-impo_Primary_Primary" fontSize="Lable_MediumProminet">
                تیکت های شما
              </CustomTypography>
              {data.items.map((ticket) => (
                <TicketText key={ticket.id} {...ticket} />
              ))}
            </>
          )}
        </>
      )}
    </MainPageLayout>
  );
};

export default SupportTicketHistoryPage;
