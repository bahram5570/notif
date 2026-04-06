import LinkIcon from '@assets/icons/calendarSignLink.svg';
import { CalendarWidgetEnums } from '@repo/core/components/calendar';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';

import { CalendarInitialSelectedDateType } from '../../../__hooks__/useCalendar/types';
import NoSigns from './NoSigns';
import SignsList from './SignsList';
import { SelectedDaySignsContainerProps } from './types';

const SelectedDaySignsContainer = ({ selectedDateInfo }: SelectedDaySignsContainerProps) => {
  const { callEvent } = useAnalytics();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { changeCurrentDate } = useSignDateState();

  const signs = selectedDateInfo.items.find((item) => item.type === CalendarWidgetEnums.Sign)?.data.signs;

  const linkTo = () => {
    const date: CalendarInitialSelectedDateType = selectedDateInfo.gregorianDate;
    changeCurrentDate(date);

    pageNavigationHandler({
      showProgressBar: true,
      linkTo: `/protected/signs`,
      id: 'SelectedDaySignsContainer',
    });
  };

  const clickHandler = () => {
    callEvent('Sign_From_Calendar');
    linkTo();
  };

  return (
    <div className="relative w-full flex items-center justify-end">
      {signs && signs.length > 0 ? <SignsList signs={signs} /> : <NoSigns />}

      <div className="relative cursor-pointer" onClick={clickHandler}>
        <LinkIcon className="w-14 h-auto" />
      </div>
    </div>
  );
};

export default SelectedDaySignsContainer;
