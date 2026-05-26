import { useEffect, useRef } from 'react';

import { MONITORING_BUFFER_DELAY } from '../../../../constants/app.constants';
import { UseMonitoring_SEND_TO_SERVERtypes } from './types';

const useMonitoring_SEND_TO_SERVER = <T,>({ api, list, onComplete }: UseMonitoring_SEND_TO_SERVERtypes<T>) => {
  const listRef = useRef(list);

  useEffect(() => {
    listRef.current = list;
  }, [list]);

  const callApi = async (result: T[]) => {
    if (result.length < 1) {
      onComplete();
      return;
    }

    try {
      await fetch(api, { method: 'POST', body: JSON.stringify({ list: result }) });
      onComplete();
    } catch (error) {
      onComplete();
      console.log(error);
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      const result = listRef.current;

      callApi(result);
    }, MONITORING_BUFFER_DELAY * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // if (typeof window !== 'undefined') {
  //   const sendOnCloseHandler = async () => {
  //     navigator.sendBeacon(api, JSON.stringify({ list }));
  //   };

  //   window.addEventListener('beforeunload', sendOnCloseHandler);
  // }
};

export default useMonitoring_SEND_TO_SERVER;
