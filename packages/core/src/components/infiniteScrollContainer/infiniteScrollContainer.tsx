import { useEffect, useRef } from 'react';

import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { PAGE_SIZE } from './constatns';
import { InfiniteScrollContainerPropsType } from './type';

export const InfiniteScrollContainer = ({
  pageSize = PAGE_SIZE,
  totalCount,
  isLoading,
  className,
  children,
  callBack,
  pageNo,
  height,
  style,
  scrollContainerRef,
}: InfiniteScrollContainerPropsType) => {
  const selfRef = useRef<HTMLDivElement>(null);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    if (!isLoading) {
      isFetchingRef.current = false;
    }
  }, [isLoading]);

  useEffect(() => {
    const el = scrollContainerRef?.current ?? selfRef.current;
    if (!el) return;

    const handleScroll = (e: Event) => {
      const isNearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 100;

      if (isNearBottom && !isLoading) {
        const currentItemsCount = (pageNo + 1) * pageSize;
        if (currentItemsCount <= totalCount) {
          isFetchingRef.current = true;

          callBack();
        }
      }
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isLoading, pageNo, totalCount, scrollContainerRef]);

  return (
    <div
      ref={selfRef}
      id="infiniteScrollContainer"
      className={`overflow-y-auto ${className}`}
      style={scrollContainerRef ? style : { height, overflowY: 'auto', ...style }}
    >
      {children}

      {isLoading && (
        <div className="w-full h-full flex justify-center py-6 ">
          <CustomSpinner size={40} className="border-impo_Surface_Outline" />
        </div>
      )}
    </div>
  );
};
