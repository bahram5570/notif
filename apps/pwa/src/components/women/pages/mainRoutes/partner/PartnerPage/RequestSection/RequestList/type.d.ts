import { ItemType, RequestPartnerResponseType } from '../../__hooks__/useGetRequestData/type';
import { RequestSectionPropsType } from '../type';

export type RequestListPropsType = Pick<RequestSectionPropsType, 'list'> & {};

export type RequestGeneratorTypeProps = {
  item: ItemType;
};
