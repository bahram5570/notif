import { WidgetShareExperienceCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetShareExperienceCardProps extends Pick<WidgetShareExperienceCardTypes, 'data'> {}

type ItemTypes = Pick<WidgetShareExperienceCardProps, 'data'>['data']['items'][0];

export interface ShareExperienceGeneratorProps extends ItemTypes {}
