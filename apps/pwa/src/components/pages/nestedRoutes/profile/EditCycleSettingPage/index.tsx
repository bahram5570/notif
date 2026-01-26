'use client';

import { FOOTER_HEIGTH } from '@components/MainFooter/constants';
import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import EditCycleSkeleton from './EditCycleSkeleton';
import RadioButtonGenerator from './RadioButtonGenerator';
import useSubmit from './__hooks__/useSubmit';
import useValue from './__hooks__/useValue';
import { RADIO_ITEMS_LIST } from './constants';

const EditCycleSettingPage = () => {
  const { handleChange, selectedValue, isModified, loading } = useValue();

  const { isLoading, submitHandler } = useSubmit(selectedValue);

  return (
    <>
      {loading && <EditCycleSkeleton />}

      {!loading && (
        <MainPageLayout
          paddingTop={0}
          rightElement="BackButton"
          className="bg-impo_Neutral_Surface"
          rightElementScript="انتخاب نحوه نمایش چرخه"
        >
          <div className="flex flex-col min-h-[100dvh] gap-6 pb-6" style={{ paddingTop: HEADER_HEIGHT }}>
            <div className="p-3 flex flex-col gap-3 " style={{ marginBottom: FOOTER_HEIGTH + 16 }}>
              <Dark_Typography fontSize="Body_Medium" className="w-full text-right text-impo_Neutral_OnBackground">
                میتونی انتخاب کنی کدوم چرخه رو بهت نشون بدیم
              </Dark_Typography>

              <div className="flex gap-3 flex-col">
                {RADIO_ITEMS_LIST.map((item, index) => (
                  <RadioButtonGenerator
                    key={index}
                    {...item}
                    handleChange={handleChange}
                    selectedValue={selectedValue}
                  />
                ))}
              </div>
            </div>

            <div
              className=" fixed bottom-0 w-full mx-auto py-3 z-40 bg-impo_Neutral_Surface"
              style={{ maxWidth: MAX_SCREEN_WIDTH }}
            >
              <div className="flex flex-col justify-center items-center px-5">
                <Dark_Button
                  fontSize="Lable_Large"
                  className="w-4/5"
                  isLoading={isLoading}
                  isDisable={!isModified}
                  onClick={submitHandler}
                >
                  ثبت تغییرات
                </Dark_Button>
              </div>
            </div>
          </div>
        </MainPageLayout>
      )}
    </>
  );
};

export default EditCycleSettingPage;
