export type InfiniteScrollContainerPropsType = {
  children: React.ReactNode;
  callApi: () => void;
  totalCount: number;
  isLoading: boolean;
  pageNo: number;
  updatePageNo: (page: number) => void;
  pageSize?: number;
  height?: string | number;
};
