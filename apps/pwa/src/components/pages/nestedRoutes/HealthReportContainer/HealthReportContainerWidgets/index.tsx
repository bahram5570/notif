import { FOOTER_HEIGTH } from '@components/MainFooter/constants';
import WidgetGenerator from '@components/Widgets/widgetGenerator';

import { HealthReportContainerWidgetsProps } from './types';

const HealthReportContainerWidgets = ({ data }: HealthReportContainerWidgetsProps) => {
  return (
    <div className="flex flex-col gap-4" style={{ marginBottom: FOOTER_HEIGTH + 16 }}>
      {data.widgets.map((widget, index) => (
        <WidgetGenerator {...widget} key={index} />
      ))}
    </div>
  );
};

export default HealthReportContainerWidgets;
