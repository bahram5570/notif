import { SupportTicketGeneratorTypes } from '../types';

type StatusType = Pick<SupportTicketGeneratorTypes, 'statusColor' | 'statusText'>;

export interface TicketStatusTypes extends StatusType {}
