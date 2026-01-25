import { useEffect, useRef, useState } from 'react';

import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';

import { UseLastItemHeightPropsType } from './type';

const useLastItemHeight = ({ chatLength }: UseLastItemHeightPropsType) => {
  const lastItemRef = useRef<HTMLDivElement>(null);
  const hasSetInitialHeight = useRef(false);
  const [lastItemHeight, setLastItemHeight] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!hasSetInitialHeight.current && chatLength > 0) {
      setLastItemHeight(`calc(100vh - ${HEADER_HEIGHT + 250}px )`);
      hasSetInitialHeight.current = true;
    }
  }, [chatLength]);

  return { lastItemHeight, lastItemRef };
};

export default useLastItemHeight;
