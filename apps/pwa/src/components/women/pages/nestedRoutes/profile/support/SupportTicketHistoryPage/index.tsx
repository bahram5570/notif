import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import TicketText from '../SupportTicketsListPage/TicketText';
import TicketHistorySkeleton from './TicketHistorySkeleton';
import useGetData from './__hooks__/useGetData';

const SupportTicketHistoryPage = () => {
  const { colors } = useTheme();
  const { data, isLoading } = useGetData();

  return (
    <WomenPageLayout
      paddingBottom={96}
      rightElement="BackButton"
      rightElementScript="سابقه تیکت ها"
      className="flex flex-col items-end p-3 gap-3 bg-impo_Grey_50"
    >
      {isLoading && <TicketHistorySkeleton />}
      {!isLoading && (
        <>
          {!data && <></>}
          {data && (
            <>
              <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
                تیکت های شما
              </Typography>
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
