import { useMemo } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toJalaliData } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import Link from 'next/link';

import TicketStatus from './TicketStatus';
import { TicketTextProps } from './type';

const TicketText = (props: TicketTextProps) => {
  const { culture } = useCulture();

  const { pageNavigationHandler } = usePageNavigationLoading();
  const { categoryName, createTime, id, lastFromUser, status, statusColor, statusText, text, title } = props;

  const dateScript = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return toJalaliData(createTime);
      case CalendarTypeEnum.Gregorian:
        return createTime.slice(0, 10).replaceAll('-', '/');
      default:
        return toJalaliData(createTime);
    }
  }, [culture.calendarType, createTime]);

  return (
    <Link
      href={`/protected/supportTicket/${id}`}
      onClick={() => pageNavigationHandler({ showProgressBar: true, id: 'ticketDetail' })}
      className=" flex flex-col items-end gap-3 p-4 w-full rounded-xl bg-impo_Neutral_Background"
    >
      <div className="flex justify-between items-center w-full">
        <TicketStatus status={status} statusColor={statusColor} statusText={statusText} />

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
    </Link>
  );
};

export default TicketText;
