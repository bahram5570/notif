import { useEffect, useState } from 'react';

import { PAGE_SIZE } from '@repo/core/constants/app.constants';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SupportTicketStatusEnum } from './enum';
import { SupportTicketsResponseTypes } from './types';

const useGetTicketsData = () => {
  const [pageNo, setPageNo] = useState(0);
  const [hadPendingTicket, setHadPendingTicket] = useState(false);
  const [ticketsData, setTicketsData] = useState<SupportTicketsResponseTypes | undefined>();

  const successHandler = (v: SupportTicketsResponseTypes) => {
    const result: SupportTicketsResponseTypes = { totalCount: v.totalCount, items: [] };

    if (ticketsData) {
      result.items = [...ticketsData.items, ...v.items];
    } else {
      result.items = v.items;
    }

    const isPending = result.items.some(
      (i) => i.lastFromUser === false && i.status === SupportTicketStatusEnum.Pending,
    );

    setTicketsData(result);
    setHadPendingTicket(isPending);
  };

  const { isLoading: ticketsLoading, callApi } = usePwaApi<SupportTicketsResponseTypes>({
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: [`support/tickets-${pageNo}`],
    api: `support/tickets/${pageNo}/${PAGE_SIZE}`,
  });

  const ticketsPageNoHandler = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    callApi();
  }, [pageNo]);

  return { ticketsLoading, ticketsData, hadPendingTicket, pageNo, ticketsPageNoHandler };
};

export default useGetTicketsData;
