import { WidgetHintCardGeneratorProps } from '../../types';

type ItemsTypes = Pick<WidgetHintCardGeneratorProps, 'isSeen' | 'minReadingDuration' | 'id' | 'isSelected'>;
export interface UseIsSeenProps extends ItemsTypes {}
