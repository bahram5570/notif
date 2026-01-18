import { useState } from 'react';

import DateModule from '@components/activation/DateModule';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useActivationPregnancyTabs from '@hooks/__activation__/useActivationPregnancyTabs';
import useProfileData from '@hooks/__profile__/useProfileData';

import Tabs from './Tabs';
import useUpdateCycle from './__hooks__/useUpdateCycle';

const PopUpEditPregnancy = () => {
  const { profileData } = useProfileData();
  const { isLoading, submitHandler } = useUpdateCycle();
  const [pregnancyDate, setPregnancyDate] = useState('');

  const defaultValues = profileData && { isDelivery: profileData.isDelivery, pregnancyDate: profileData.pregnancyDate };
  const { tab, tabHandler, endDate, startDate, defaultDate, resetKey } = useActivationPregnancyTabs(defaultValues);

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed top-0 left-0 right-0 bottom-0 mx-auto bg-impo_Neutral_Background z-50"
    >
      <WomenPageLayout rightElement="BackButton" paddingTop={0} paddingBottom={0}>
        <div className="flex flex-col items-center px-4 py-8 min-h-[100dvh]">
          <Dark_Typography
            fontSize="Body_Medium"
            style={{ paddingTop: HEADER_HEIGHT }}
            className="text-impo_Neutral_OnBackground"
          >
            برای محاسبه هفته بارداری:
          </Dark_Typography>

          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            یکی از روش‌های زیر رو انتخاب کن
          </Dark_Typography>

          <Tabs tab={tab} tabHandler={tabHandler} />

          <DateModule
            key={resetKey}
            endDate={endDate}
            startDate={startDate}
            defaultDate={defaultDate}
            valueHandler={setPregnancyDate}
          />

          <Dark_Button
            className="mt-auto"
            isLoading={isLoading}
            fontSize="Lable_Large"
            onClick={() => submitHandler({ pregnancyDate, isDelivery: tab === 1 ? true : false })}
          >
            ثبت تغییرات
          </Dark_Button>
        </div>
      </WomenPageLayout>
    </div>
  );
};

export default PopUpEditPregnancy;
