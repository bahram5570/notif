import Dark_Typography from '@components/ui/Dark_Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';

import TicketText from '../SupportTicketsListPage/TicketText';
import TicketHistorySkeleton from './TicketHistorySkeleton';
import useGetData from './__hooks__/useGetData';

const SupportTicketHistoryPage = () => {
  const { data, isLoading } = useGetData();

  return (
    <WomenPageLayout
      paddingBottom={96}
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
              <Dark_Typography className="text-impo_Primary_Primary" fontSize="Lable_MediumProminet">
                تیکت های شما
              </Dark_Typography>
              {data.items.map((ticket) => (
                <TicketText key={ticket.id} {...ticket} />
              ))}
            </>
          )}
        </>
      )}
    </WomenPageLayout>
  );
};

export default SupportTicketHistoryPage;
