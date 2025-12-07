import { useState } from 'react';

const useStreamLoading = () => {
  const [streamLoading, setStreamLoading] = useState(false);

  const streamLoadingHandler = (v: boolean) => {
    setStreamLoading(v);
  };

  return { streamLoading, streamLoadingHandler };
};

export default useStreamLoading;
