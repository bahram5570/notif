import { useEffect } from 'react';

import Dark_Button from '@components/ui/Dark_Button';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { PERIOD_CYCLE_HISTORY_VIEW_ALL } from './constants';
import { WidgetPeriodCycleHistoryViewAllProps } from './types';

const WidgetPeriodCycleHistoryViewAll = ({ data }: WidgetPeriodCycleHistoryViewAllProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQuery, removeQuery } = useCustomReactQuery([PERIOD_CYCLE_HISTORY_VIEW_ALL], { gcTime: 60 * 5 * 1000 });

  useEffect(() => {
    removeQuery({ queryKey: [PERIOD_CYCLE_HISTORY_VIEW_ALL] });
  }, []);

  const linkToHandler = () => {
    newQuery({ queryKey: [PERIOD_CYCLE_HISTORY_VIEW_ALL], payload: data });

    pageNavigationHandler({
      showProgressBar: true,
      id: 'WidgetPeriodCycleHistoryViewAll',
      linkTo: '/protected/periodCycleHistoryViewAll',
    });
  };

  return (
    <Dark_Button
      className="mt-2 h-10 !bg-impo_Neutral_Surface !text-impo_Neutral_OnSurface !border-impo_Neutral_Surface"
      fontSize="Lable_Large"
      onClick={linkToHandler}
    >
      مشاهده همه دوره‌های گذشته
    </Dark_Button>
  );
};

export default WidgetPeriodCycleHistoryViewAll;
