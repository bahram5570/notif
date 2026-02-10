import { useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import DateModule from '@components/activation/DateModule';
import useActivationPregnancyTabs from '@hooks/__activation__/useActivationPregnancyTabs';
import useProfileData from '@hooks/__profile__/useProfileData';
import { HEADER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

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
      <MainPageLayout rightElement="BackButton" paddingTop={0} paddingBottom={0}>
        <div className="flex flex-col items-center px-4 py-8 min-h-[100dvh]">
          <CustomTypography
            fontSize="Body_Medium"
            style={{ paddingTop: HEADER_HEIGHT }}
            className="text-impo_Neutral_OnBackground"
          >
            برای محاسبه هفته بارداری:
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            یکی از روش‌های زیر رو انتخاب کن
          </CustomTypography>

          <Tabs tab={tab} tabHandler={tabHandler} />

          <DateModule
            key={resetKey}
            endDate={endDate}
            startDate={startDate}
            defaultDate={defaultDate}
            valueHandler={setPregnancyDate}
          />

          <CustomButton
            className="mt-auto"
            isLoading={isLoading}
            fontSize="Lable_Large"
            onClick={() => submitHandler({ pregnancyDate, isDelivery: tab === 1 ? true : false })}
          >
            ثبت تغییرات
          </CustomButton>
        </div>
      </MainPageLayout>
    </div>
  );
};

export default PopUpEditPregnancy;
