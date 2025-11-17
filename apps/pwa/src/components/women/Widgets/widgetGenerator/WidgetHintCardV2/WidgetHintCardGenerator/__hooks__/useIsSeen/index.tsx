import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import useApi from '@hooks/useApi';

import { UseIsSeenProps } from './types';

const useIsSeen = (props: UseIsSeenProps) => {
  const { ref, inView } = useInView();
  const [isSeen, setIsSeen] = useState(props.isSeen);
  const { callApi } = useApi({ api: 'archive/hint/seen', method: 'POST' });

  useEffect(() => {
    if (!isSeen && inView && props.isSelected) {
      setIsSeen(true);
      callApi({ id: props.id });
    }
  }, [isSeen, inView, props.isSelected]);

  return { ref };
};

export default useIsSeen;
