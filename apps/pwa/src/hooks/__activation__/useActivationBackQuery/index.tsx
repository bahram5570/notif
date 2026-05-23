import { useEffect } from 'react';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import { UseActivationBackQueryProps } from './types';

const useActivationBackQuery: UseActivationBackQueryProps = ({ queryName, onCallBack }) => {
  const router = useCustomRouter();

  useEffect(() => {
    const backHandler = () => {
      const queryList = window.location.search.slice(1).split('&');

      const hasSelectedQuery =
        queryList.findIndex((item) => {
          return item.split('=')[0] === queryName;
        }) > -1;

      if (hasSelectedQuery) {
        if (onCallBack) {
          onCallBack();
        }

        router.back();
      }
    };

    window.addEventListener('popstate', backHandler);

    return () => {
      window.removeEventListener('popstate', backHandler);
    };
  }, []);
};

export default useActivationBackQuery;
