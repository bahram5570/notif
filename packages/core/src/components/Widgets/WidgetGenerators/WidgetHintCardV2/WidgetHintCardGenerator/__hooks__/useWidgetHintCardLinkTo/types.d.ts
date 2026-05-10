import { WidgetHintCardGeneratorProps } from '../../types';

export interface UseWidgetHintCardLinkToTypes extends Pick<
  WidgetHintCardGeneratorProps,
  'externalLink' | 'internalLink'
> {}
