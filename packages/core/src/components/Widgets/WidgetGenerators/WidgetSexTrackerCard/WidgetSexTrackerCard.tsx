import { currentDate } from '../../../../utils/dates';

import { SignCategoryGenerator } from '../../../SignCategoryGenerator';
import { SIGNS_LIST } from '../../../SignGenerator';
import { WidgetSexTrackerCardProps } from './types';

const { gDate } = currentDate();

export const WidgetSexTrackerCard = ({ data }: WidgetSexTrackerCardProps) => {
  const category = 6;
  const signs = SIGNS_LIST[category].signs;
  const info = { gregorianDate: gDate, initialSelectedSigns: data.signs };

  return (
    <>
      <SignCategoryGenerator category={category} title={data.title} signs={signs} info={info} />
    </>
  );
};
