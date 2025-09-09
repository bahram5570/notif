export type InfiniteScrollContainerPropsType = {
  children: React.ReactNode;
  callBack: () => void;
  totalCount: number;
  isLoading: boolean;
  pageNo: number;
  pageSize?: number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
};
