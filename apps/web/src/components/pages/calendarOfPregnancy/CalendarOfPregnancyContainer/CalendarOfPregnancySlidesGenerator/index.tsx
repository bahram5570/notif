'use client';

import CustomTypography from '@components/ui/CustomTypography';

import SlidesLong from './SlidesLong';
import SlidesShort from './SlidesShort';
import { CalendarOfPregnancySlidesGeneratorTypes } from './types';

const CalendarOfPregnancySlidesGenerator = ({ title, description, list }: CalendarOfPregnancySlidesGeneratorTypes) => {
  const isLongList = list.length > 5;

  return (
    <div className="w-full">
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="text-center !text-impo_Neutral_OnBackground">
        {title}
      </CustomTypography>

      <CustomTypography fontSize="Body_Small" className="text-center pb-6 !text-impo_Surface_Outline">
        {description}
      </CustomTypography>

      {isLongList ? <SlidesLong list={list} /> : <SlidesShort list={list} />}
    </div>
  );
};

export default CalendarOfPregnancySlidesGenerator;
