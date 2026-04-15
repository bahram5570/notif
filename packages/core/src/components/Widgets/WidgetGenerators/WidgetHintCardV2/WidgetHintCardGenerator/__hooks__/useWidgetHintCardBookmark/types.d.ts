import { WidgetHintCardGeneratorProps } from '../../types';

export interface UseWidgetHintCardBookmarkTypes extends Pick<WidgetHintCardGeneratorProps, 'isBookmarked' | 'id'> {}

export type WidgetHintCardBookmarkApiInfoTypes = null | {
  api: string;
  payload: { id: string };
  method: 'POST' | 'DELETE';
};
