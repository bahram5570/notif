import { SignCategoryGenerator } from '@repo/core/components/SignCategoryGenerator';
import { SIGNS_LIST } from '@repo/core/components/SignGenerator';
import { currentDate } from '@repo/core/utils/dates';

import { WidgetSexTrackerCardProps } from './types';

const { gDate } = currentDate();

const WidgetSexTrackerCard = ({ data }: WidgetSexTrackerCardProps) => {
  const category = 6;
  const signs = SIGNS_LIST[category].signs;
  const info = { gregorianDate: gDate, initialSelectedSigns: data.signs };

  return (
    <>
      <SignCategoryGenerator category={category} title={data.title} signs={signs} info={info} />
    </>
  );
};

export default WidgetSexTrackerCard;
