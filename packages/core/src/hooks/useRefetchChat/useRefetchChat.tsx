import { useEffect, useState } from 'react';

import { UseRefetchChatTypes } from './types';

export const useRefetchChat = ({ initialInterval, isLoading, onCallBack, lastMessageId }: UseRefetchChatTypes) => {
  const [interval, setInterval] = useState(initialInterval);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const timer = setTimeout(
      () => {
        onCallBack();
        // setInterval((state) => {
        //   // # Maximum interval is 1 minute
        //   if (state < 6) {
        //     return state + 1;
        //   } else {
        //     return state;
        //   }
        // });
        setInterval(interval < 6 ? interval + 1 : interval);
      },
      Math.pow(2, interval) * 1000,
    );

    return () => {
      clearTimeout(timer);
    };
    // }, [isLoading, lastMessageId]);
  }, [isLoading, interval, lastMessageId]);

  const restHandler = () => {
    setInterval(initialInterval);
  };

  return { restHandler };
};
