import { useEffect, useState } from 'react';

import { SubscriptionPackageTypes } from '../useGetData/types';

const useCurrentPackage = (packages?: SubscriptionPackageTypes[]) => {
  const [currentPackageId, setCurrentPackageId] = useState<string | null>(null);

  useEffect(() => {
    if (packages && currentPackageId === null) {
      setCurrentPackageId(packages[0].id);
    }
  }, [packages, currentPackageId]);

  const currentPackageIdHandler = (v: string) => {
    setCurrentPackageId(v);
  };

  const currentPackage = packages?.find((p) => p.id === currentPackageId);

  return { currentPackageId, currentPackageIdHandler, currentPackage };
};

export default useCurrentPackage;
