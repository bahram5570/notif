import { segmentActionHandler } from '../../PregnancyCheckup/PregnancyCheckupContainer/utils';
import ArrowIcon from '@assets/icons/calendarArrow.svg';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useWidgetActions from '@hooks/useWidgetActions';

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
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {name}
        </Dark_Typography>
        <CustomImage src={icon} />
      </div>

      <div className="flex flex-row-reverse items-center justify-between gap-3">
        <ArrowIcon className="w-4 h-4 stroke-impo_Surface_OutlineVariant" />
      </div>
    </div>
  );
};

export default QuestionCheckupItem;
