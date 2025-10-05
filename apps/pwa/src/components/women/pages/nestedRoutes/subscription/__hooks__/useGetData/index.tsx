import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';

import { CURRENT_PACKAGE_ID, INITAIL_PACKAGE } from './constants';
import { PackagesTypes, ResponseTypes, currentPackageHandlerTypes } from './types';

const useGetData = () => {
  const [data, setData] = useState<ResponseTypes | null>(null);
  const [currentPackage, setCurrentPackage] = useState<PackagesTypes>(INITAIL_PACKAGE);
  const currentPackageIdSession = sessionStorage.getItem(CURRENT_PACKAGE_ID);

  const { callApi, isLoading } = useApi<ResponseTypes>({
    api: 'info/subscribtions_v6',
    method: 'POST',
    onSuccess: (v) => {
      setData(v);
    },
  });

  const currentPackageHandler: currentPackageHandlerTypes = (i) => {
    sessionStorage.setItem(CURRENT_PACKAGE_ID, JSON.stringify(i.viewId));
    setCurrentPackage(i);
  };

  useEffect(() => {
    callApi({});
  }, []);

  useEffect(() => {
    if (data) {
      setCurrentPackage(data.packages[0]);
      if (currentPackageIdSession) {
        const packageId = JSON.parse(currentPackageIdSession);
        const findCurrentPackage = data.packages.find((i) => i.viewId === packageId);
        if (findCurrentPackage) {
          setCurrentPackage(findCurrentPackage);
        }

        sessionStorage.removeItem(CURRENT_PACKAGE_ID);
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
