import { WidgetSubscriptionCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

type PackagesTypes = Pick<WidgetSubscriptionCardTypes, 'data'>['data']['package'];

export type currentPackageHandlerTypes = (i: PackagesTypes) => void;

export type ResponseTypes = {
  text: string;
  isValid: true;
  title: string;
  upText: string;
  endTime: string;
  downText: string;
  supportText: string;
  description: string;
  supportPhone: string;
  hasSubscribtion: boolean;
  organizationText: string;
  showCloseButton: boolean;
  packages: PackagesTypes[];
  morePackages: PackagesTypes[];
  discountCodeHelper: string;
  upTextOrganization: string;
  isShowOrganization: boolean;
  hintTextOrganization: string;
  downTextOrganization: string;
  isValidDiscountCode: boolean;
  visibleCount: number;
  medias: string[];
  discount: { text: string; valid: boolean };
};
