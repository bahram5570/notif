'use client';

import ProfileContainerGenerator from '@components/__profile__/ProfileContainerGenerator';
import ProfileItemGenerator from '@components/__profile__/ProfileItemGenerator';
import Button from '@components/ui/Button';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import UserInfoBirthdate from './UserInfoBirthdate';
import UserInfoCalendarType from './UserInfoCalendarType';
import UserInfoModals from './UserInfoModals';
import UserInfoName from './UserInfoName';
import UserInfoSkeleton from './UserInfoSkeleton';
import useSubmit from './__hooks__/useSubmit';
import useValues from './__hooks__/useValues';

const UserInfoPage = () => {
  const { colors } = useTheme();
  const { submitHandler, submitLoading } = useSubmit();
  const { fetchProfileLoading, isModified, values, valuesHandler } = useValues();

  const isDisable = !isModified || values.name.trim() === '';

  return (
    <>
      <WomenPageLayout
        paddingTop={0}
        rightElement="BackButton"
        backgroundColor={colors.Grey_50}
        rightElementScript="اطلاعات کاربری"
      >
        <div
          style={{ paddingTop: HEADER_HEIGHT + 24 }}
          className="w-full min-h-[100dvh] flex relative flex-col items-center gap-6 pb-6 px-4 z-0"
        >
          {fetchProfileLoading && <UserInfoSkeleton />}

          {values && !fetchProfileLoading && (
            <>
              <ProfileContainerGenerator>
                <ProfileItemGenerator title="نام" description="دوست داری با چه نام قشنگی تو ایمپو صدات کنیم؟ 😍 ">
                  <UserInfoName value={values.name} valueHandler={(v) => valuesHandler('name', v)} />
                </ProfileItemGenerator>

                <ProfileItemGenerator
                  title="تاریخ تولد"
                  description="تو کدوم سال و ماه و روز با اومدنت دنیا رو قشنگ تر کردی؟ 🥹 "
                >
                  <UserInfoBirthdate
                    name="birthDate"
                    value={values.birthDate}
                    valueHandler={(v) => valuesHandler('birthDate', v)}
                  />
                </ProfileItemGenerator>
              </ProfileContainerGenerator>

              <ProfileContainerGenerator>
                <ProfileItemGenerator title="انتخاب تقویم" description="نوع تقویم خود را انتخاب کنید">
                  <UserInfoCalendarType
                    value={values.calendarType}
                    valueHandler={(v) => valuesHandler('calendarType', v)}
                  />
                </ProfileItemGenerator>
              </ProfileContainerGenerator>

              <div className="flex mx-auto mt-auto pt-4 min-w-[204px]">
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

      <UserInfoModals values={values} valuesHandler={valuesHandler} />
    </>
  );
};

export default UserInfoPage;
