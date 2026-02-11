import { segmentActionHandler } from '../../../utils';
import PolygonIcon from '@assets/icons/Polygon.svg';
import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';

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
    <div
      className="flex flex-row-reverse justify-between items-center p-4  border-b border-b-impo_Neutral_Surface"
      onClick={linkTo}
    >
      {isCurrentWeek && (
        <div className="flex flex-row-reverse items-center gap-1">
          <PolygonIcon className="w-4 h-4 fill-impo_Pink_500" />
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {label}
          </CustomTypography>
        </div>
      )}

      {!isCurrentWeek && (
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {label}
        </CustomTypography>
      )}

      <div className="flex flex-row-reverse items-center justify-between gap-3">
        {needTest && (
          <div className="px-2 py-[6px] rounded-full bg-impo_Warning_Warning">
            <CustomTypography fontSize="Lable_Small" className="text-impo_Warning_OnWarning">
              نیاز به پر کردن آزمایش
            </CustomTypography>
          </div>
        )}

        <ArrowIcon className="w-4 h-4 stroke-impo_Surface_OutlineVariant" />
      </div>
    </div>
  );
};

export default SegmentWeekItemGenerator;
