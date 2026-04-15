import { WidgetClinicCardV2Types } from '../../../../providers/WidgetActionsProvider';

export interface WidgetClinicCardV2Props extends Pick<WidgetClinicCardV2Types, 'data'> {}

type ItemTypes = Pick<WidgetClinicCardV2Props, 'data'>['data']['items'][0];
export interface ClinicWidgetGeneratorProps extends ItemTypes {}
