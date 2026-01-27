'use client';

import { useState } from 'react';

import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import { HEADING_HEIGHT } from '@components/activation/ActivationHeading/constants';
import DateModule from '@components/activation/DateModule';
import Dark_Button from '@components/ui/Dark_Button';
import useActivationPregnancyTabs from '@hooks/__activation__/useActivationPregnancyTabs';
import useProfileData from '@hooks/__profile__/useProfileData';

import Tabs from './Tabs';
import useUpdateCycle from './__hooks__/useUpdateCycle';

const EditPregnancyContainer = () => {
  const { profileData } = useProfileData();
  const { isLoading, submitHandler } = useUpdateCycle();
  const [pregnancyDate, setPregnancyDate] = useState('');

  const defaultValues = profileData && { isDelivery: profileData.isDelivery, pregnancyDate: profileData.pregnancyDate };
  const { tab, tabHandler, endDate, startDate, defaultDate, resetKey } = useActivationPregnancyTabs(defaultValues);

  return (
    <div className="relative flex flex-col overflow-x-hidden min-h-[100dvh]">
      <ActivationBackBtn />

      <ActivationHeading
        progressPercentage={100}
        scripts={{ description: '', subtitle: '', title: 'برای محاسبه هفته بارداری یکی از روش‌های زیر رو انتخاب کن:' }}
      />

      <div className="flex flex-col items-center px-4 min-h-[100dvh]" style={{ paddingTop: HEADING_HEIGHT }}>
        <Tabs tab={tab} tabHandler={tabHandler} />

        <DateModule
          key={resetKey}
          endDate={endDate}
          startDate={startDate}
          defaultDate={defaultDate}
          valueHandler={setPregnancyDate}
        />

        <div className="flex mx-auto mt-auto pb-6 w-[204px] min-w-fit">
          <Dark_Button
            className="mt-auto"
            isLoading={isLoading}
            fontSize="Lable_Large"
            onClick={() => submitHandler({ pregnancyDate, isDelivery: tab === 1 ? true : false })}
          >
            ثبت تغییرات
          </Dark_Button>
        </div>
      </div>
    </div>
  );
};

export default EditPregnancyContainer;
