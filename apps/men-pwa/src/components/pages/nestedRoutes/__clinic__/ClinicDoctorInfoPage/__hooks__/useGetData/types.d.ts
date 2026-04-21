import { CommentsResponseTypes } from '@repo/core/components/clinic';

export type CommentsDataTypes = Pick<CommentsResponseTypes, 'comment'>['comment']['list'];

export type CommentsPaginationTypes = { pageSize: number; totalCount: number; pageNo: number };

export interface UseGetDataProps {
  clinicInfo: string;
  drId: string;
}
