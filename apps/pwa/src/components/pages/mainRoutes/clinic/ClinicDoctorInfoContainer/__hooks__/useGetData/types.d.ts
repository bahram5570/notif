import { CommentsResponseTypes } from '@repo/core/components/clinic';

export interface UseGetDataProps {
  drId: string;
  clinicInfo: string;
  isRedirected: boolean;
}

export type CommentsDataTypes = Pick<CommentsResponseTypes, 'comment'>['comment']['list'];

export type CommentsPaginationTypes = { pageSize: number; totalCount: number; pageNo: number };
