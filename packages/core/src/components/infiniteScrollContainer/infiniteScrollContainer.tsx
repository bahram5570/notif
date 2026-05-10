import { useEffect, useRef } from 'react';

import { FOOTER_HEIGHT, PAGE_SIZE } from '../../constants/app.constants';
import { CustomSpinner } from '../ui/CustomSpinner';
import { InfiniteScrollContainerPropsType } from './type';

export const InfiniteScrollContainer = ({
  pageSize = PAGE_SIZE,
  scrollContainerRef,
  isLoading = false,
  height = 'auto',
  totalCount = 0,
  className = '',
  style = {},
  pageNo = 0,
  children,
  callBack,
}: InfiniteScrollContainerPropsType) => {
  const selfRef = useRef<HTMLDivElement>(null);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    if (!isLoading) isFetchingRef.current = false;
  }, [isLoading]);

  useEffect(() => {
    const el = scrollContainerRef?.current ?? selfRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (isFetchingRef.current) return;

      const scrollPosition = el.scrollTop + el.clientHeight;
      const bottomThreshold = el.scrollHeight - 100;
      const isNearBottom = scrollPosition >= bottomThreshold;

      if (isNearBottom && !isLoading) {
        const currentItemsCount = (pageNo + 1) * pageSize;

        if (currentItemsCount < totalCount) {
          isFetchingRef.current = true;
          callBack?.();
        }
      }
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isLoading, pageNo, pageSize, totalCount, callBack, scrollContainerRef]);

  return (
    <div
      ref={selfRef}
      id="infiniteScrollContainer"
      className={`overflow-y-auto relative ${className}`}
      style={scrollContainerRef ? style : { height, overflowY: 'auto', position: 'relative', ...style }}
    >
      {children}

      {isLoading && (
        <div style={{ bottom: FOOTER_HEIGHT + 16 }} className="w-full flex justify-center absolute left-0">
          <CustomSpinner size={40} className="border-impo_Surface_Outline" />
        </div>
      )}
    </div>
  );
};
