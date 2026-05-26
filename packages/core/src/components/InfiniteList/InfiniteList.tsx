import { CustomSpinner } from '../ui/CustomSpinner';
import useInfiniteList from './__hooks__/useInfiniteList';
import useInfiniteListPagination from './__hooks__/useInfiniteListPagination';
import { INFINITE_LIST_LOADING_CONTAINER_HEIGHT } from './constants';
import { InfiniteListTypes } from './types';

export const InfiniteList = <T,>(props: InfiniteListTypes<T>) => {
  const { containerHeight, renderedList, itemRef } = useInfiniteList({
    count: props.list.length,
    parentRef: props.parentRef,
  });

  useInfiniteListPagination({
    parentRef: props.parentRef,
    pagination: props.pagination,
  });

  return (
    <div className="relative w-full" style={{ height: containerHeight + INFINITE_LIST_LOADING_CONTAINER_HEIGHT }}>
      {renderedList.map((item) => {
        const renderItem = props.list[item.index];
        const transform = `translateY(${item.start}px)`;
        const pointerEvents = props.pagination?.isLoading ? 'none' : 'auto';

        return (
          <div
            ref={itemRef}
            key={item.key}
            data-index={item.index}
            style={{ transform, pointerEvents }}
            className="absolute top-0 left-0 w-full"
          >
            {props.renderItem(renderItem, item.index)}
          </div>
        );
      })}

      {props.pagination?.isLoading && (
        <div
          style={{ height: INFINITE_LIST_LOADING_CONTAINER_HEIGHT }}
          className="absolute bottom-0 left-0 right-0 flex justify-center items-end pb-2"
        >
          <CustomSpinner size={40} className="border-impo_Surface_Outline" />
        </div>
      )}
    </div>
  );
};
