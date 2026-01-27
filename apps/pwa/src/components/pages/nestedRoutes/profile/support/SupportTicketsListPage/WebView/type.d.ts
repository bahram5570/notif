import { TicketcategoryResponseType } from '../__hooks__/useGetDataCategory/type';

type urlType = Pick<TicketcategoryResponseType, 'url'>;

export interface WebViewPropsType extends urlType {}
