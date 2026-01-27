import { MemoryType } from '../../MemoryPage/__hooks__/useGetData/type';

export type CommentPropsType = Pick<MemoryType, 'textPartner' | 'fromMan'> & {
  partnerName: string | undefined;
};
