import { useEffect, useState } from 'react';

import { SubscriptionPackageTypes } from '../useGetData/types';

const useCurrentPackage = (initialData?: SubscriptionPackageTypes) => {
  const [currentPackage, setCurrentPackage] = useState<SubscriptionPackageTypes | null>(null);

  useEffect(() => {
    if (initialData) {
      setCurrentPackage(initialData);
    }
  }, [initialData]);

  const currentPackageHandler = (v: SubscriptionPackageTypes) => {
    setCurrentPackage(v);
  };

  return { currentPackage, currentPackageHandler };
};

export default useCurrentPackage;
