import { segmentActionHandler } from '../../PregnancyCheckup/PregnancyCheckupContainer/utils';
import ArrowIcon from '@assets/icons/calendarArrow.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useWidgetActions from '@hooks/useWidgetActions';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { QuestionCheckupItemPropsType } from './type';

const QuestionCheckupItem = ({ icon, name, type, lastIndex }: QuestionCheckupItemPropsType) => {
  const { callEvent } = useAnalytics();
  const { getQueryParams } = useQueryParamsHandler();
  const pregnancyWeek = getQueryParams('week');
  const { actionHandler } = useWidgetActions();

  const linkTo = () => {
    callEvent('PregnancyCareWeekClick');
    const action = segmentActionHandler(Number(pregnancyWeek), type, name);
    actionHandler(action);
  };

  return (
    <div
      className={`flex flex-row-reverse justify-between items-center p-4 border-b ${!lastIndex && ' border-b border-impo_Neutral_Surface'}`}
      onClick={linkTo}
      id="PregnancyCareWeekClick"
    >
      <div className="flex flex-row items-center gap-3">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {name}
        </CustomTypography>
        <CustomImage src={icon} />
      </div>

      <div className="flex flex-row-reverse items-center justify-between gap-3">
        <ArrowIcon className="w-4 h-4 stroke-impo_Surface_OutlineVariant" />
      </div>
    </div>
  );
};

export default QuestionCheckupItem;
