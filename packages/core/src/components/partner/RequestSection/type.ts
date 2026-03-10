import { RequestPartnerResponseType } from './__hooks__/useGetRequestData/type';

type ItemType = Pick<RequestPartnerResponseType, 'list'>;

export interface RequestSectionPropsType {
  element: JSX.Element;
  isMan?: boolean;
}
