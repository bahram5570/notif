import { LikeInfoTypes } from '../useLikes/types';

export type UpdateAssociationHandler = (v: LikeInfoTypes & { shareId: string }) => void;
