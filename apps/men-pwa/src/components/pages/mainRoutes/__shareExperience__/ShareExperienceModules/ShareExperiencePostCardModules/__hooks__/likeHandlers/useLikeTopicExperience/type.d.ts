import { LikeInfoTypes } from '../useLikes/types';

export type UpdateTopicHandler = (v: LikeInfoTypes & { shareId: string }) => void;
