import { WidgetRoutinProps } from '@components/Widgets/widgetGenerator/WidgetRoutin/types';

type WidgetRoutinPropsDataTypes = Pick<WidgetRoutinProps, 'data'>['data'];
type WriterInfoTypes = Pick<WidgetRoutinPropsDataTypes, 'writerIcon' | 'writerName' | 'writerSpeciality'>;

export interface WidgetRoutinWriterProps extends WriterInfoTypes {}
