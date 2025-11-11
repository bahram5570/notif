import { WidgetHintCardGeneratorProps } from '../../types';

type ItemsTypes = Pick<WidgetHintCardGeneratorProps, 'isSeen' | 'id' | 'isSelected'>;
export interface UseIsSeenProps extends ItemsTypes {}
