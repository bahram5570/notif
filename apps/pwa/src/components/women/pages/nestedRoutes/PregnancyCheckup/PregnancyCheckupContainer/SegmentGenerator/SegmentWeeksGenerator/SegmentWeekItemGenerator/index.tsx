import { segmentActionHandler } from '../../../utils';
import PolygonIcon from '@assets/icons/Polygon.svg';
import ArrowIcon from '@assets/icons/calendarArrow.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useWidgetActions from '@hooks/useWidgetActions';

import { WeekItemGeneratorPropsType } from './type';

const SegmentWeekItemGenerator = ({ isCurrentWeek, items, label, needTest, week }: WeekItemGeneratorPropsType) => {
  const { callEvent } = useAnalytics();
  const { actionHandler } = useWidgetActions();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkTo = () => {
    callEvent('PregnancyCheckupCardClick');
    if (items.length === 1) {
      const action = segmentActionHandler(week, items[0].type, items[0].name);
      actionHandler(action);
    } else {
      pageNavigationHandler({
        showProgressBar: true,
        linkTo: `/protected/checkupQuestionList?items=${encodeURIComponent(JSON.stringify(items))}&title=${label}&week=${week}`,
        id: 'checkupQuestionList',
      });
    }
  };

  return (
    <div className="flex flex-row-reverse justify-between items-center p-4" onClick={linkTo}>
      {isCurrentWeek && (
        <div className="flex flex-row-reverse items-center gap-1">
          <PolygonIcon className="w-4 h-4 fill-impo_Pink_500" />
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {label}
          </Dark_Typography>
        </div>
      )}

      {!isCurrentWeek && (
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {label}
        </Dark_Typography>
      )}

      <div className="flex flex-row-reverse items-center justify-between gap-3">
        {needTest && (
          <div className="px-2 py-[6px] rounded-full bg-impo_Warning_Warning">
            <Dark_Typography fontSize="Lable_Small" className="text-impo_Warning_OnWarning">
              نیاز به پر کردن آزمایش
            </Dark_Typography>
          </div>
        )}

        <ArrowIcon className="w-4 h-4 stroke-impo_Surface_OutlineVariant" />
      </div>
    </div>
  );
};

export default SegmentWeekItemGenerator;
