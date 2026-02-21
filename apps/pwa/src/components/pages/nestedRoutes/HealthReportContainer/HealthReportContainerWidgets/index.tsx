import { WidgetGenerators } from '@repo/core/components/Widgets/WidgetGenerators';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';

import { HealthReportContainerWidgetsProps } from './types';

const HealthReportContainerWidgets = ({ data }: HealthReportContainerWidgetsProps) => {
  return (
    <div className="flex flex-col gap-4" style={{ marginBottom: FOOTER_HEIGHT + 16 }}>
      {data.widgets.map((widget, index) => (
        <WidgetGenerators {...widget} key={index} />
      ))}
    </div>
  );
};

export default HealthReportContainerWidgets;
