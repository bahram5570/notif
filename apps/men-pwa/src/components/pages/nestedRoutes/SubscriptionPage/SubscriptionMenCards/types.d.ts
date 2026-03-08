import { SubscriptionPackageTypes } from '../__hooks__/useGetData/types';

export interface SubscriptionMenCardsTypes {
  packages: SubscriptionPackageTypes[];
  currentPackage: SubscriptionPackageTypes;
  currentPackageHandler: (v: SubscriptionPackageTypes) => void;
}

export interface SubscriptionMenGeneratorTypes extends SubscriptionPackageTypes {
  isSelected: boolean;
  onSelect: () => void;
}
