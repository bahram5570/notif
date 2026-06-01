import { AccessType } from '@repo/core/components/ShareExperience';

import { ReplyGeneratorProps } from '../../types';

export interface UseReplyListProps extends Pick<
  ReplyGeneratorProps,
  'replies' | 'repliesCount' | 'commentId' | 'shareId'
> {}

type RepliesListTypes = Pick<UseReplyListProps, 'replies'>['replies'];

export type DataRepliesListTypes = { repliesList: RepliesListTypes };

export type RepliesListResponseTypes = AccessType & {
  valid: boolean;
  totalCount: number;
  replies: RepliesListTypes;
};
