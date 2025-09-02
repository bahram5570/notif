import { useEffect, useState } from 'react';

import { handleResult } from './__utils__';

import { GeneticTestOnlineResultTypes } from '../../../TestOnlineContainer/types';

const useTestOnlineResult = () => {
  const [data, setData] = useState<null | GeneticTestOnlineResultTypes>(null);

  useEffect(() => {
    const result = handleResult();

    if (result) {
      setData(result);
    }
  }, []);

  return { data };
};

export default useTestOnlineResult;
