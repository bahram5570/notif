import { CustomTypography } from '../../../../ui/CustomTypography';
import CircleProgress from './CircleProgress';
import { WidgetPeriodReportEmptyStateCardNotifeProps } from './types';

const WidgetPeriodReportEmptyStateCardNotife = ({
  percent,
  days,
  text,
}: WidgetPeriodReportEmptyStateCardNotifeProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center px-4">
      <div className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-impo_Primary_Primary">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Primary_OnPrimary">
          {text}
        </CustomTypography>

        <CircleProgress days={days} percent={percent} />
      </div>
    </div>
  );
};

export default WidgetPeriodReportEmptyStateCardNotife;
