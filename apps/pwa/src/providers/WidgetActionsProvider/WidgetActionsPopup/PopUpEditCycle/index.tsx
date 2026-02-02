import { useState } from 'react';

import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import MainPageLayout from '@components/MainPageLayout';
import useAnalytics from '@hooks/useAnalytics';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import PopUpEditCycleFinishPeriod from './PopUpEditCycleFinishPeriod';
import PopUpEditCycleLastPeriod from './PopUpEditCycleLastPeriod';
import { EditPageTypes, PopUpEditCycleProps } from './types';

const PopUpEditCycle = ({ popUp, isPopUpActionCommpleteHandler }: PopUpEditCycleProps) => {
  const [startTime, setStartTime] = useState('');
  useAnalytics({ pageView_eventName: 'Start_Cycle_Edited' });
  const { isLoading, data: profileData } = useGetProfileData();
  const [editPage, setEditPage] = useState<EditPageTypes>('lastPeriod');

  const editPageHandler = (v: EditPageTypes) => {
    setEditPage(v);
    isPopUpActionCommpleteHandler();
  };

  const startTimeHandler = (v: string) => {
    setStartTime(v);
  };

  return (
    <MainPageLayout rightElement="BackButton" paddingTop={0} paddingBottom={0}>
      {isLoading && <CustomSpinner className="border-impo_Primary_Primary" />}

      {!isLoading && profileData && popUp && (
        <div className="flex flex-col items-center px-4 py-8 min-h-[100dvh]">
          {editPage === 'lastPeriod' && (
            <PopUpEditCycleLastPeriod
              data={popUp.data}
              startTime={startTime}
              editPageHandler={editPageHandler}
              startTimeHandler={startTimeHandler}
            />
          )}

          {editPage === 'finishPeriod' && (
            <PopUpEditCycleFinishPeriod
              startTime={startTime}
              periodLength={profileData.periodLength}
              data={popUp.data.button.action.nextStep.data}
            />
          )}
        </div>
      )}
    </MainPageLayout>
  );
};

export default PopUpEditCycle;
