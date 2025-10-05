import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';

import { INITAIL_PACKAGE } from './constants';
import { PackagesTypes, ResponseTypes, currentPackageHandlerTypes } from './types';

const useGetData = () => {
  const [data, setData] = useState<ResponseTypes | null>(null);
  const [currentPackage, setCurrentPackage] = useState<PackagesTypes>(INITAIL_PACKAGE);

  const { callApi, isLoading } = useApi<ResponseTypes>({
    api: 'info/subscribtions_v6',
    method: 'POST',
    onSuccess: (v) => {
      setData(v);
    },
  });

  const currentPackageHandler: currentPackageHandlerTypes = (i) => {
    setCurrentPackage(i);
  };

  useEffect(() => {
    callApi({});
  }, []);

  useEffect(() => {
    if (data) {
      setCurrentPackage(data.packages[0]);
    }
  }, [data]);

  const loadingPage = isLoading && !data ? true : false;
  const loadingResponse = isLoading && data ? true : false;

  return { callApi, loadingPage, loadingResponse, data, currentPackage, currentPackageHandler };
};

export default useGetData;
