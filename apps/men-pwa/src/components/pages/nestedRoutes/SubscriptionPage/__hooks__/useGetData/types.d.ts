export type SubscriptionPackageTypes = {
  id: string;
  vat: number;
  unit: string;
  text: string;
  code: string;
  value: number;
  viewId: string;
  isFree: boolean;
  vatText: string;
  discount: number;
  totalPay: number;
  realValue: number;
  valueText: string;
  desciption: string;
  isSpecific: boolean;
  specificText: string;
  discountText: string;
  totalPayText: string;
  payButtonText: string;
  realValueText: string;
  inAppPurchase: boolean;
};

export type SubscriptionResponseTypes = {
  isValid: boolean;
  supportText: string;
  supportPhone: string;
  hasSubscribtion: boolean;
  discountCodeHelper: string;
  isValidDiscountCode: boolean;
  packages: SubscriptionPackageTypes[];
};
