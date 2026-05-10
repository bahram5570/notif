import { SupportTicketsResponseTypes } from '../../__hooks__/useGetTicketsData/types';

export interface SupportTicketsTabContentsTypes extends SupportTicketsResponseTypes {
  ticketsPageNoHandler: () => void;
  isLoading: boolean;
  pageNo: number;
}
