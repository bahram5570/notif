'use client';

import ProfileContainerGenerator from '@components/__profile__/ProfileContainerGenerator';
import ProfileItemGenerator from '@components/__profile__/ProfileItemGenerator';
import Button from '@components/ui/Button';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import PeriodSettingsLingthGenerator from './PeriodSettingsLingthGenerator';
import PeriodSettingsModals from './PeriodSettingsModals';
import PeriodSettingsSkeleton from './PeriodSettingsSkeleton';
import useSubmit from './__hooks__/useSubmit';
import useValues from './__hooks__/useValues';

const PeriodSettingsPage = () => {
  const { colors } = useTheme();
  const { submitHandler, submitLoading } = useSubmit();
  const { fetchDataLoading, isModified, values, valuesHandler } = useValues();

  const isDisable = !isModified;

  return (
    <>
      <WomenPageLayout
        paddingTop={0}
        rightElement="BackButton"
        backgroundColor={colors.Grey_50}
        rightElementScript="انتخاب نحوه نمایش چرخه"
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
                <Button
                  size="medium"
                  variant="fill"
                  color="primary"
                  isDisable={isDisable}
                  isLoading={submitLoading}
                  onClick={() => submitHandler(values)}
                >
                  ویرایش
                </Button>
              </div>
            </>
          )}
        </div>
      </WomenPageLayout>

      <PeriodSettingsModals values={values} valuesHandler={valuesHandler} />
    </>
  );
};

export default PeriodSettingsPage;
