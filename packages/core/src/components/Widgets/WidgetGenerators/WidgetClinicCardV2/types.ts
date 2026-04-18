import { WidgetClinicCardV2Types } from '../../../../providers/WidgetActionsProvider';

export interface WidgetClinicCardV2Props extends Pick<WidgetClinicCardV2Types, 'data'> {}

type DataTypes = Pick<WidgetClinicCardV2Props, 'data'>['data'];
type ItemTypes = DataTypes['items'][0];
export interface ClinicWidgetGeneratorProps extends ItemTypes {}

export interface WidgetClinicCardV2HeadingTypes extends Pick<DataTypes, 'title' | 'description' | 'cta'> {}
