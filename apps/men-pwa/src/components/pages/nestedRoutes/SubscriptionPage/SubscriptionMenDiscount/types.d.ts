import { SubscriptionResponseTypes } from '../__hooks__/useGetData/types';

export interface SubscriptionMenDiscountProps extends Pick<
  SubscriptionResponseTypes,
  'isValidDiscountCode' | 'discountCodeHelper'
> {
  approvedCodeHandler: (v: string) => void;
  onApply: (v: { code: string }) => void;
  loadingResponse: boolean;
}

export interface CodeInputProps extends Pick<
  SubscriptionMenDiscountProps,
  'discountCodeHelper' | 'isValidDiscountCode' | 'loadingResponse' | 'codeHandler' | 'approvedCodeHandler'
> {
  codeHandler: (v: string) => void;
  onClick: () => void;
  code: string;
}
