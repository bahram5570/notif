import { RequestPartnerResponseType } from '../__hooks__/useGetRequestData/type';
import { RequestSectionPropsType } from '../type';

type ItemType = Pick<RequestPartnerResponseType, 'list'>['list'][0];
export type RequestListPropsType = {
  list: ItemType[];
};

export type RequestGeneratorTypeProps = {
  item: ItemType;
};
