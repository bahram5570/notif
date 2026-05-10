'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';

import ProfileContainerGenerator from '@components/__profile__/ProfileContainerGenerator';
import ProfileItemGenerator from '@components/__profile__/ProfileItemGenerator';
import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import PeriodSettingsLingthGenerator from './PeriodSettingsLingthGenerator';
import PeriodSettingsModals from './PeriodSettingsModals';
import PeriodSettingsSkeleton from './PeriodSettingsSkeleton';
import useSubmit from './__hooks__/useSubmit';
import useValues from './__hooks__/useValues';

const PeriodSettingsPage = () => {
  const { submitHandler, submitLoading, acceptingChanges } = useSubmit();

  const { fetchDataLoading, isModified, values, valuesHandler } = useValues();

  const isDisable = !isModified;

  return (
    <>
      <MainPageLayout
        paddingTop={0}
        rightElement="BackButton"
        className="bg-impo_Neutral_Surface"
        rightElementScript="ویرایش اطلاعات چرخه"
      >
        <div className="flex flex-col min-h-[100dvh] gap-6 pb-6 px-4" style={{ paddingTop: HEADER_HEIGHT + 24 }}>
          {fetchDataLoading && <PeriodSettingsSkeleton />}

          {!fetchDataLoading && (
            <>
              <ProfileContainerGenerator>
                <ProfileItemGenerator title="طول پریود" description="معمولا پریودت چند روز طول می‌کشه؟">
                  <PeriodSettingsLingthGenerator values={values} name="periodLength" />
                </ProfileItemGenerator>

                <ProfileItemGenerator
                  title="طول دوره"
                  description="فاصله اولین روز خونریزی تا اولین روز خونریزی بعدیت چند روزه؟"
                >
                  <PeriodSettingsLingthGenerator values={values} name="cycleLength" />
                </ProfileItemGenerator>
              </ProfileContainerGenerator>

              <div className="mt-auto pt-4 mx-auto min-w-[204px]">
                <CustomButton
                  fontSize="Lable_Large"
                  isDisable={isDisable}
                  isLoading={submitLoading}
                  onClick={() => submitHandler(values)}
                >
                  ویرایش
                </CustomButton>
              </div>
            </>
          )}
        </div>
      </MainPageLayout>

      <PeriodSettingsModals values={values} valuesHandler={valuesHandler} acceptingChanges={acceptingChanges} />
    </>
  );
};

export default PeriodSettingsPage;
