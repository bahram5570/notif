'use client';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import ProfileContainerGenerator from '@components/__profile__/ProfileContainerGenerator';
import ProfileItemGenerator from '@components/__profile__/ProfileItemGenerator';
import Dark_Button from '@components/ui/Dark_Button';

import PeriodSettingsLingthGenerator from './PeriodSettingsLingthGenerator';
import PeriodSettingsModals from './PeriodSettingsModals';
import PeriodSettingsSkeleton from './PeriodSettingsSkeleton';
import useSubmit from './__hooks__/useSubmit';
import useValues from './__hooks__/useValues';

const PeriodSettingsPage = () => {
  const { submitHandler, submitLoading } = useSubmit();
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

                <ProfileItemGenerator title="طول دوره" description="معمولا هر چند روز یک بار پریود می‌شی؟">
                  <PeriodSettingsLingthGenerator values={values} name="cycleLength" />
                </ProfileItemGenerator>
              </ProfileContainerGenerator>

              <div className="mt-auto pt-4 mx-auto min-w-[204px]">
                <Dark_Button
                  fontSize="Lable_Large"
                  isDisable={isDisable}
                  isLoading={submitLoading}
                  onClick={() => submitHandler(values)}
                >
                  ویرایش
                </Dark_Button>
              </div>
            </>
          )}
        </div>
      </MainPageLayout>

      <PeriodSettingsModals values={values} valuesHandler={valuesHandler} />
    </>
  );
};

export default PeriodSettingsPage;
