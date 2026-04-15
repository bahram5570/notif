import { WidgetHintCardGeneratorProps } from '../types';

type InfoTypes = Pick<
  WidgetHintCardGeneratorProps,
  'writerName' | 'writerSpeciality' | 'externalLink' | 'internalLink' | 'isBookmarked' | 'id'
>;
export interface WidgetHintCardHeadingProps extends InfoTypes {}
