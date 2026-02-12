import { SubscriptionGenerator } from '@repo/core/components/SubscriptionGenerator';

import { SubscriptionPackagesProps } from './types';

const SubscriptionPackages = ({ currentPackageHandler, currentPackage, packages }: SubscriptionPackagesProps) => {
  return (
    <div className="w-full z-0 flex flex-col gap-3 my-4">
      {packages.map((items, index) => (
        <SubscriptionGenerator
          onSelect={() => currentPackageHandler(items)}
          isSelected={currentPackage.id === items.id}
          key={index}
          {...items}
        />
      ))}
    </div>
  );
};

export default SubscriptionPackages;
