import { useEffect, useRef } from 'react';

import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { PAGE_SIZE } from './constatns';
import { InfiniteScrollContainerPropsType } from './type';

const InfiniteScrollContainer = ({
  pageSize = PAGE_SIZE,
  totalCount,
  isLoading,
  className,
  children,
  callBack,
  pageNo,
  height,
  style,
}: InfiniteScrollContainerPropsType) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      if (!target) return;

      const isEndBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 100;

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
      id="infiniteScrollContainer"
      className={`overflow-y-auto ${className}`}
      style={{
        ...style,
        height,
        pointerEvents: isLoading ? 'none' : 'auto',
        touchAction: isLoading ? 'none' : 'auto',
      }}
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

export default InfiniteScrollContainer;
