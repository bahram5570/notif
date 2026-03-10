'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';

import ProfileContainerGenerator from '@components/__profile__/ProfileContainerGenerator';
import ProfileItemGenerator from '@components/__profile__/ProfileItemGenerator';
import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import UserInfoBirthdate from './UserInfoBirthdate';
import UserInfoCalendarType from './UserInfoCalendarType';
import UserInfoModals from './UserInfoModals';
import UserInfoName from './UserInfoName';
import UserInfoSexualStatus from './UserInfoSexualStatus';
import UserInfoSkeleton from './UserInfoSkeleton';
import useSubmit from './__hooks__/useSubmit';
import useValues from './__hooks__/useValues';

const UserInfoPage = () => {
  const { submitHandler, submitLoading } = useSubmit();
  const { fetchProfileLoading, isModified, values, valuesHandler } = useValues();

  const isDisable = !isModified || values?.name.trim() === '';

  return (
    <>
      <MainPageLayout
        paddingTop={0}
        rightElement="BackButton"
        className="bg-impo_Neutral_Surface"
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
                <ProfileItemGenerator title="نام" description="دوست داری تو ایمپو با چه اسمی صدات کنیم؟">
                  <UserInfoName value={values.name} valueHandler={(v) => valuesHandler('name', v)} />
                </ProfileItemGenerator>

                <ProfileItemGenerator title="تاریخ تولد" description="تو کدوم سال و ماه و روز به دنیا اومدی؟  ">
                  <UserInfoBirthdate
                    name="birthdate"
                    value={values.birthdate}
                    valueHandler={(v) => valuesHandler('birthdate', v)}
                  />
                </ProfileItemGenerator>
              </ProfileContainerGenerator>
              <ProfileContainerGenerator>
                <ProfileItemGenerator
                  title="رابطه جنسی"
                  description="برای ارائه بهترین توصیه‌ها برای رابطه جنسی بهتره که بدونیم"
                >
                  <UserInfoSexualStatus
                    value={values.sexualStatus}
                    valueHandler={(v) => valuesHandler('sexualStatus', v)}
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
                <CustomButton
                  fontSize="Lable_Large"
                  isDisable={isDisable}
                  isLoading={submitLoading}
                  onClick={() => submitHandler(values)}
                  className="!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
                >
                  ویرایش
                </CustomButton>
              </div>
            </>
          )}
        </div>
      </MainPageLayout>

      <UserInfoModals values={values} valuesHandler={valuesHandler} />
    </>
  );
};

export default UserInfoPage;
