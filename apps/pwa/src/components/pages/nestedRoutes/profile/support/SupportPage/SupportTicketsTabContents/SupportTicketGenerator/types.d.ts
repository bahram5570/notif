import { SupportTicketsTabContentsTypes } from '../types';

type ItemType = Pick<SupportTicketsTabContentsTypes, 'items'>['items'][0];

export interface SupportTicketGeneratorTypes extends ItemType {}
