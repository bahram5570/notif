import { ItemHandlerType } from '../../types';

type ItemType = Pick<ItemHandlerType, 'isFollow' | 'userId'> & {
  experienceId: string | undefined;
};
export type UpdateCommentListHandlerType = (v: ItemType) => void;
