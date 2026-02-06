import { useEffect, useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { INITAIL_PACKAGE } from './constants';
import { PackagesTypes, ResponseTypes, currentPackageHandlerTypes } from './types';

let viewId: null | string;

const useGetData = () => {
  const [data, setData] = useState<ResponseTypes | null>(null);
  const [currentPackage, setCurrentPackage] = useState<PackagesTypes>(INITAIL_PACKAGE);

  const { callApi, isLoading } = usePwaApi<ResponseTypes>({
    api: 'info/subscribtions_v6',
    method: 'POST',
    onSuccess: (v) => {
      setData(v);
    },
  });

  const currentPackageHandler: currentPackageHandlerTypes = (i) => {
    viewId = i.viewId;

    setCurrentPackage(i);
  };

  useEffect(() => {
    callApi({});
  }, []);

  useEffect(() => {
    if (data) {
      setCurrentPackage(data.packages[0]);
      if (viewId) {
        const packages = [...data.packages, ...data.morePackages];
        const findCurrentPackage = packages.find((i) => i.viewId === viewId);
        if (findCurrentPackage) {
          setCurrentPackage(findCurrentPackage);
        }
      } else {
        setCurrentPackage(data.packages[0]);
      }
    }
  }, [data]);

  const loadingPage = isLoading && !data ? true : false;
  const loadingResponse = isLoading && data ? true : false;

  return { callApi, loadingPage, loadingResponse, data, currentPackage, currentPackageHandler };
};

export default useGetData;
