import { SupportTicketStatusEnum } from './enum';

export type SupportTicketsResponseTypes = {
  totalCount: number;
  items: {
    id: string;
    text: string;
    title: string;
    statusText: string;
    createTime: string;
    statusColor: string;
    categoryName: string;
    lastFromUser: boolean;
    status: SupportTicketStatusEnum;
  }[];
};
