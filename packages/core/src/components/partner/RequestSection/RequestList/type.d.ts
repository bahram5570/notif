import { RequestPartnerResponseType } from '../__hooks__/useGetRequestData/type';
import { RequestSectionPropsType } from '../type';

type ItemType = Pick<RequestPartnerResponseType, 'list'>['list'][0];
export type RequestListPropsType = {
  list: ItemType[];
  isMan?: boolean;
};

export type RequestGeneratorTypeProps = Pick<RequestListPropsType, 'isMan'> & {
  item: ItemType;
};
