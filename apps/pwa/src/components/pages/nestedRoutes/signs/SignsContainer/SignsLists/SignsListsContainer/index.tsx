import { Fragment } from 'react';

import { SignCategoryGenerator } from '@repo/core/components/SignCategoryGenerator';
import { SIGNS_LIST } from '@repo/core/components/SignGenerator';
import { KitTests } from '@repo/core/components/KitTests';

import { CalendarWidgetEnums } from '@components/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/CalendarEnums';
import { DayTypeEnums } from '@repo/core/providers/WidgetActionsProvider';

import BloodPressureListContainer from '../BloodPressureListContainer';
import BloodSugerListContainer from '../BloodSugerListContainer';
import CustomContainer from '../CustomContainer';
import Weight from '../Weight';
import { SignsListsContainerProps } from './types';

const slidesList = Object.entries(SIGNS_LIST);
slidesList.sort((a, b) => a[1].order - b[1].order);

const SignsListsContainer = ({ info, selectHandler, updateSingSelectedList }: SignsListsContainerProps) => {
  const hasTestKits = [DayTypeEnums.Pregnancy, DayTypeEnums.SecondaryPregnancy].includes(info.dayType);

  return (
    <div className="flex flex-col gap-4 px-4">
      {hasTestKits && (
        <div className="flex flex-col gap-3">
          <CustomContainer
            title="تست دیابت"
            allBtnLink="/protected/bloodSugerList"
            plusIconLink={'/protected/bloodSuger'}
            showAllBtn={info.initailBloodSuger.length > 3}
          >
            <BloodSugerListContainer bloodSugerList={info.initailBloodSuger.slice(0, 3)} />
          </CustomContainer>

          <CustomContainer
            title=" تست فشارخون بارداری"
            allBtnLink="/protected/bloodPressureList"
            plusIconLink={'/protected/bloodPressure'}
            showAllBtn={info.initailBloodPressure.length > 3}
          >
            <BloodPressureListContainer bloodPressureList={info.initailBloodPressure.slice(0, 3)} />
          </CustomContainer>
        </div>
      )}

      <Weight weight={info.weight} />

      {slidesList.map((signItems, itemIndex) => {
        const key = `itemIndex-${itemIndex}`;
        const exactDayType = signItems[1]?.exactDayType;

        if (typeof exactDayType !== 'undefined' && !exactDayType.includes(info.dayType)) {
          return <Fragment key={key} />;
        }

        return (
          <SignCategoryGenerator
            key={key}
            info={info}
            title={signItems[1].title}
            signs={signItems[1].signs}
            selectHandler={selectHandler}
            category={Number(signItems[0])}
            updateSingSelectedList={updateSingSelectedList}
          />
        );
      })}

      <KitTests
        data={info.kitTests}
        gregorianDate={info.gregorianDate}
        hasOvulationKit={info.calendarTypesList.includes(CalendarWidgetEnums.OvulationKit)}
      />
    </div>
  );
};

export default SignsListsContainer;
