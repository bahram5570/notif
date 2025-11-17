import { RequestPartnerResponseType } from '../__hooks__/useGetRequestData/type';

type ItemType = Pick<RequestPartnerResponseType, 'list'>;

export interface RequestSectionPropsType extends ItemType {
  isLoading: boolean;
  hasData: boolean | undefined;
  getData: () => void;
}
