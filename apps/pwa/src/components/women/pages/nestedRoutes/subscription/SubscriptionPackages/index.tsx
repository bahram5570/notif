import SubscriptionGenerator from '@components/women/SubscriptionGenerator';

import { SubscriptionPackagesProps } from './types';

const SubscriptionPackages = ({
  selectedPackageIndexHandler,
  selectedPackageIndex,
  packages,
}: SubscriptionPackagesProps) => {
  return (
    <div className="w-full z-0 flex flex-col gap-3 my-4">
      {packages.map((items, index) => (
        <SubscriptionGenerator
          onSelect={() => selectedPackageIndexHandler(index)}
          isSelected={selectedPackageIndex === index}
          key={index}
          {...items}
        />
      ))}
    </div>
  );
};

export default SubscriptionPackages;
