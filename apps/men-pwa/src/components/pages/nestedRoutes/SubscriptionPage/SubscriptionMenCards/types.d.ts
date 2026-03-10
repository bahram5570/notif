import { SubscriptionPackageTypes } from '../__hooks__/useGetData/types';

export interface SubscriptionMenCardsTypes {
  packages: SubscriptionPackageTypes[];
  currentPackageHandler: (v: id) => void;
  currentPackageId: string;
}

export interface SubscriptionMenGeneratorTypes extends SubscriptionPackageTypes {
  isSelected: boolean;
  onSelect: () => void;
}
