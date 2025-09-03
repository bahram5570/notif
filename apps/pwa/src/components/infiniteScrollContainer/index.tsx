import { useEffect, useRef } from 'react';

import Spinner from '@components/ui/Spinner';

import { PAGE_SIZE } from './constatns';
import { InfiniteScrollContainerPropsType } from './type';

const InfiniteScrollContainer = ({
  children,
  callBack,
  totalCount,
  isLoading,
  pageNo,
  pageSize = PAGE_SIZE,
  height,
}: InfiniteScrollContainerPropsType) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      if (!target) return;

      const isEndBottom = target.scrollTop + target.clientHeight >= target.scrollHeight;

      if (isEndBottom && !isLoading) {
        const currentItemsCount = (pageNo + 1) * pageSize;
        const isAllItemsLoaded = currentItemsCount >= totalCount;

        if (!isAllItemsLoaded) {
          callBack();
        }
      }
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isLoading, pageNo, totalCount]);

  return (
    <div
      ref={containerRef}
      className=" overflow-y-auto"
      style={{
        height,
        pointerEvents: isLoading ? 'none' : 'auto',
        touchAction: isLoading ? 'none' : 'auto',
      }}
      id="infiniteScrollContainer"
    >
      {children}
      {isLoading && (
        <div className="w-full flex justify-center py-6">
          <Spinner color="outline" width={40} />
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollContainer;
