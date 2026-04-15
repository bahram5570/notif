import { WidgetHintCardV2Props } from '../types';

type DataTypes = Pick<WidgetHintCardV2Props, 'data'>['data']['list'][0];
export interface WidgetHintCardGeneratorProps extends DataTypes {
  background: string;
  isSelected: boolean;
}
