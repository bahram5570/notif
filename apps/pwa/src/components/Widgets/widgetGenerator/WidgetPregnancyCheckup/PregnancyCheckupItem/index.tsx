import ArrowIcon from '@assets/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import useAnalytics from '@hooks/useAnalytics';
import useWidgetActions from '@hooks/useWidgetActions';

import { PregnancyCheckupItemPropsTypes } from './type';

const PregnancyCheckupItem = ({
  action,
  backgroundColor,
  description,
  icon,
  title,
}: PregnancyCheckupItemPropsTypes) => {
  const { callEvent } = useAnalytics();
  const { actionHandler } = useWidgetActions();
  const linkTo = () => {
    callEvent('CheckupWidgetCard');
    actionHandler(action);
  };
  return (
    <div
      style={{ background: `${colorFormatConverter(backgroundColor)}` }}
      className=" rounded-lg flex flex-row-reverse gap-2 p-3"
      onClick={linkTo}
    >
      <div>
        <CustomImage src={icon} className="w-8 h-8" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex w-full justify-between pb-3 border-b border-b-black/15">
          <ArrowIcon className="w-6 h-6" style={{ stroke: colorFormatConverter(backgroundColor) }} />
          <CustomTypography fontSize="Body_Large" className="text-impo_Black">
            {title}
          </CustomTypography>
        </div>
        <CustomTypography fontSize="Body_Medium" className="text-impo_Black">
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default PregnancyCheckupItem;
