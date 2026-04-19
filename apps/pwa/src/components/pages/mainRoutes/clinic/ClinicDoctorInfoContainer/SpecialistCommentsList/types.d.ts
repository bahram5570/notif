import { CommentsResponseTypes } from '@repo/core/components/clinic';

type ListTypes = Pick<CommentsResponseTypes, 'comment'>['comment']['list'];

export interface SpecialistCommentsListProps {
  commentsData: ListTypes;
}

export interface SpecialistCommentsGeneratorProps {
  isPositive: boolean;
  scripts: string[];
}
