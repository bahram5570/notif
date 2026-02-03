import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import TicketText from '../TicketText';
import TicketFooter from './TicketFooter';
import TicketLinkGenerator from './TicketLinkGenerator';
import { TicketListPropsType } from './type';

const TicketList = ({ id, items, tickets, title }: TicketListPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const ticketId = getQueryParams('id');

  return (
    <div className="flex flex-col items-end gap-3 min-h-[100dvh] p-4" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
      <>
        {!ticketId && tickets && tickets.map((ticket) => <TicketText {...ticket} key={ticket.id} />)}
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Lable_MediumProminet">
          {title}
        </CustomTypography>

        {items?.map((link, index) => (
          <TicketLinkGenerator key={index} {...link} />
        ))}
      </>
      <TicketFooter id={id} title={title} />
    </div>
  );
};

export default TicketList;
