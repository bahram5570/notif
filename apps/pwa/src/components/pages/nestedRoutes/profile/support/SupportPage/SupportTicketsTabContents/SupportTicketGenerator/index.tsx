import { useMemo } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toJalaliData } from '@repo/core/utils/dates';

import { useCulture } from '@repo/core/hooks/useCulture';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import TicketStatus from './TicketStatus';
import { SupportTicketGeneratorTypes } from './types';

const SupportTicketGenerator = ({
  categoryName,
  statusColor,
  statusText,
  createTime,
  status,
  title,
  text,
  id,
}: SupportTicketGeneratorTypes) => {
  const { culture } = useCulture();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const dateScript = useMemo(() => {
    const parts = createTime.split(' ');
    const time = parts[1].slice(0, 5);
    const date = parts[0];

    let result = '';

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        result = toJalaliData(date);
        break;

      case CalendarTypeEnum.Gregorian:
        result = date.replaceAll('-', '/');
        break;

      default:
        result = toJalaliData(date);
        break;
    }

    return `${time} - ${result}`;
  }, [culture.calendarType, createTime]);

  const selectHandler = () => {
    pageNavigationHandler({ showProgressBar: true, linkTo: `/protected/supportTicket/${id}`, id });
  };

  return (
    <div
      onClick={selectHandler}
      className="flex flex-col items-end gap-3 p-4 w-full rounded-xl bg-impo_Neutral_Surface"
    >
      <div className="flex justify-between items-center w-full">
        <TicketStatus statusColor={statusColor} statusText={statusText} />

        <CustomTypography className="text-impo_Surface_OnSurfaceVariant" fontSize="Lable_SmallProminet">
          {title || categoryName}
        </CustomTypography>
      </div>

      <CustomTypography className="text-impo_Surface_OnSurfaceVariant text-right" fontSize="Body_Small">
        {text}
      </CustomTypography>

      <CustomTypography className="text-impo_Surface_Outline text-left w-full" fontSize="Body_Small">
        {dateScript}
      </CustomTypography>
    </div>
  );
};

export default SupportTicketGenerator;
