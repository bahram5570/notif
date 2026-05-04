import { LikeInfoTypes } from '../useLikes/types';

export type UpdateActivitiesExperienceHandler = (v: LikeInfoTypes & { shareId: string }) => void;
