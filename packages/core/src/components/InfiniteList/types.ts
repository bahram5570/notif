import React from 'react';

export type InfiniteListPaginationTypes = {
  pageNo: number;
  pageSize: number;
  isLoading: boolean;
  totalCount: number;
  callPagination: () => void;
};

export interface InfiniteListTypes<T> {
  list: T[];
  pagination?: InfiniteListPaginationTypes;
  parentRef: React.RefObject<HTMLDivElement>;
  renderItem: (item: T, index: number) => React.ReactNode;
}
