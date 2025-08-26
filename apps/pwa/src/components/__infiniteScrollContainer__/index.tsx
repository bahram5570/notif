import { useEffect, useRef } from 'react';

import Spinner from '@components/ui/Spinner';

import { PAGE_SIZE } from './constatns';
import { InfiniteScrollContainerPropsType } from './type';

const InfiniteScrollContainer = ({
  children,
  callApi,
  totalCount,
  isLoading,
  pageNo,
  updatePageNo,
}: InfiniteScrollContainerPropsType) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;

      if (target) {
        const isEndBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 100;

        if (isEndBottom && !isLoading) {
          const currentItemsCount = (pageNo + 1) * PAGE_SIZE;
          const isAllItemsLoaded = currentItemsCount >= totalCount;

          if (!isAllItemsLoaded) {
            updatePageNo(pageNo + 1);
          }
        }
      }
    };

    el?.addEventListener('scroll', handleScroll);

    return () => el?.removeEventListener('scroll', handleScroll);
  }, [isLoading, pageNo, totalCount]);

  useEffect(() => {
    if (!isLoading) {
      callApi();
    }
  }, [pageNo, isLoading]);

  return (
    <div ref={containerRef} className=" h-[100dvh] overflow-y-auto">
      {children}
      {isLoading && (
        <div className="absolute left-0 right-0 bottom-20 w-full flex justify-center">
          <Spinner color="outline" width={40} />
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollContainer;
