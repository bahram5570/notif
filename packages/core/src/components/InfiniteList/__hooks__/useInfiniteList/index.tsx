import { useVirtualizer } from '@tanstack/react-virtual';

import { UseInfiniteListTypes } from './types';

const useInfiniteList = ({ count, parentRef }: UseInfiniteListTypes) => {
  const virtualizer = useVirtualizer({
    count,
    overscan: 2,
    estimateSize: () => 150,
    getScrollElement: () => parentRef.current,
    useAnimationFrameWithResizeObserver: true,
    measureElement: (el) => el?.getBoundingClientRect().height,
  });

  const containerHeight = virtualizer.getTotalSize();
  const renderedList = virtualizer.getVirtualItems();
  const itemRef = virtualizer.measureElement;

  return { containerHeight, renderedList, itemRef };
};

export default useInfiniteList;
