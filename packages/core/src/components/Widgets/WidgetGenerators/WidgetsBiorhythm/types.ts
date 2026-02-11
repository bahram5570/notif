import { WidgetBiorhythmTypes } from '../../../../providers/WidgetActionsProvider';

export interface WidgetBiorhythmCardProps extends Pick<WidgetBiorhythmTypes, 'data'> {}

// type ItemTypes = Pick<WidgetReportCardProps, 'data'>['data']['list'][0];

export interface BiorhythmPropsType extends WidgetBiorhythmCardProps {}
