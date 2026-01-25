'use client';

import RulerIcon from '@assets/icons/ruler.svg';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import ProfileContainerGenerator from '@components/__profile__/ProfileContainerGenerator';
import ProfileItemGenerator from '@components/__profile__/ProfileItemGenerator';
import Dark_Button from '@components/ui/Dark_Button';

import UserInfoBirthdate from './UserInfoBirthdate';
import UserInfoCalendarType from './UserInfoCalendarType';
import UserInfoHeight from './UserInfoHeight';
import UserInfoModals from './UserInfoModals';
import UserInfoName from './UserInfoName';
import UserInfoSkeleton from './UserInfoSkeleton';
import useSubmit from './__hooks__/useSubmit';
import useValues from './__hooks__/useValues';

const UserInfoPage = () => {
  const { submitHandler, submitLoading } = useSubmit();
  const { fetchProfileLoading, isModified, values, valuesHandler } = useValues();

  const RulerElement = (
    <div className="w-12 h-12 min-w-12 min-h-12 flex items-start justify-center rounded-full px-[10px] py-2 overflow-hidden bg-impo_Blue_50 dark:bg-impo_Blue_900">
      <RulerIcon className="fill-impo_Primary_Primary" style={{ width: '100%', height: 'auto' }} />
    </div>
  );

  const isDisable = !isModified || values.name.trim() === '';

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
                <ProfileItemGenerator title="نام" description="دوست داری با چه نام قشنگی تو ایمپو صدات کنیم؟ 😍">
                  <UserInfoName value={values.name} valueHandler={(v) => valuesHandler('name', v)} />
                </ProfileItemGenerator>

                <ProfileItemGenerator
                  title="تاریخ تولد"
                  description="تو کدوم سال و ماه و روز با اومدنت دنیا رو قشنگ تر کردی؟ 🥹"
                >
                  <UserInfoBirthdate
                    name="birthDate"
                    value={values.birthDate}
                    valueHandler={(v) => valuesHandler('birthDate', v)}
                  />
                </ProfileItemGenerator>
              </ProfileContainerGenerator>

              <ProfileContainerGenerator>
                <ProfileItemGenerator
                  element={RulerElement}
                  title="ویرایش قد"
                  description="از اینجا میتونی قدت رو ویرایش کنی"
                >
                  <UserInfoHeight value={values.height} valueHandler={(v) => valuesHandler('height', v)} />
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

      <UserInfoModals values={values} valuesHandler={valuesHandler} />
    </>
  );
};

export default UserInfoPage;
