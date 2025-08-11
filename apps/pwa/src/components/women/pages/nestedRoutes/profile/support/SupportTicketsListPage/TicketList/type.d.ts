import { TicketcategoryResponseType } from '../__hooks__/useGetDataCategory/type';

type itemType = Pick<TicketcategoryResponseType, 'id' | 'items' | 'tickets' | 'title'>;

export interface TicketListPropsType extends itemType {}
