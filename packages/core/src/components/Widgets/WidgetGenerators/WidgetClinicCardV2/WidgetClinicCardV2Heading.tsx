import { textShorter } from '../../../../utils/scripts';
import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';

import { useAnalytics } from '../../../../hooks/useAnalytics';
import { useWidgetActions } from '../../../../hooks/useWidgetActions';
import { CustomTypography } from '../../../ui/CustomTypography';
import { WidgetClinicCardV2HeadingTypes } from './types';

const WidgetClinicCardV2Heading = ({ title, description, cta }: WidgetClinicCardV2HeadingTypes) => {
  const { callEvent } = useAnalytics();
  const { actionHandler } = useWidgetActions();

  const clickHandler = () => {
    callEvent('Action_From_ClinicCardV2');
    actionHandler(cta);
  };

  return (
    <div className="w-full px-4 pb-3">
      <div className="flex justify-between items-center gap-2">
        <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
          {textShorter(title, 30)}
        </CustomTypography>

        <div className="flex gap-1 items-center" onClick={clickHandler}>
          <CustomTypography fontSize="Lable_Medium" className="!text-impo_Neutral_OnBackground">
            مشاهده همه
          </CustomTypography>

          <ArrowIcon className="w-4 h-auto stroke-impo_Surface_Outline" />
        </div>
      </div>

      <CustomTypography fontSize="Lable_Small" className="!text-impo_Surface_Outline pt-1">
        {description}
      </CustomTypography>
    </div>
  );
};

export default WidgetClinicCardV2Heading;
