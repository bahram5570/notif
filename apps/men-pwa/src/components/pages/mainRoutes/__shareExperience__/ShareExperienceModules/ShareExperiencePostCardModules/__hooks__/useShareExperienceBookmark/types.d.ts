import { ShareExperienceBookmarkModuleProps } from '../../types';

export interface UseShareExperienceBookmarkProps {
  id: string;
  isBookmarked: boolean;
}

export type ItemHandlerType = { id: string; isBookmarked: boolean };
export type UpdateHandlerType = (v: ItemHandlerType) => void;
