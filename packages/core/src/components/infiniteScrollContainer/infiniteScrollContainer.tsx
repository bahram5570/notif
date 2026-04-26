import { useEffect, useRef } from 'react';

import { PAGE_SIZE } from '../../constants/app.constants';
import { CustomSpinner } from '../ui/CustomSpinner';
import { InfiniteScrollContainerPropsType } from './type';

export const InfiniteScrollContainer = ({
  pageSize = PAGE_SIZE,
  scrollContainerRef,
  totalCount,
  isLoading,
  className,
  children,
  callBack,
  pageNo,
  height,
  style,
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
      className={`overflow-y-auto ${className} relative`}
      style={scrollContainerRef ? style : { height, overflowY: 'auto', ...style }}
    >
      {children}

      {isLoading && (
        <div className="w-full  flex justify-center py-6  absolute bottom-24">
          <CustomSpinner size={40} className="border-impo_Surface_Outline" />
        </div>
      )}
    </div>
  );
};
