import { MemoryType } from './__hooks__/useGetData/type';

export type MemoryItemPropsType = Pick<
  MemoryType,
  'fileName' | 'text' | 'time' | 'title' | 'id' | 'fromMan' | 'textPartner' | 'timePartner' | 'validPartner'
> & {
  currentPage;
};
