import { ResponseTypes } from '../__hooks__/useGetData/types';

type ItemType = Pick<ResponseTypes, 'discountCodeHelper'>;

export interface ApprovedCodeToastPropsType extends ItemType {
  callApi: (v: {}) => void;
  onRestHandler: () => void;
}
