'use client';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import EditCycleSkeleton from './EditCycleSkeleton';
import RadioButtonGenerator from './RadioButtonGenerator';
import useSubmit from './__hooks__/useSubmit';
import useValue from './__hooks__/useValue';
import { RADIO_ITEMS_LIST } from './constants';

const EditCycleSettingPage = () => {
  const { colors } = useTheme();
  const { handleChange, selectedValue, isModified, loading } = useValue();

  const { isLoading, submitHandler } = useSubmit(selectedValue);

  return (
    <>
      {loading && <EditCycleSkeleton />}

      {!loading && (
        <WomenPageLayout
          paddingTop={0}
          rightElement="BackButton"
          className="bg-impo_Grey_50"
          rightElementScript="انتخاب نحوه نمایش چرخه"
        >
          <div className="flex flex-col min-h-[100dvh] gap-6 pb-6" style={{ paddingTop: HEADER_HEIGHT }}>
            <div className="p-3 flex flex-col gap-3 " style={{ marginBottom: FOOTER_HEIGTH + 16 }}>
              <Typography scale="Body" size="Medium" className="w-full" textAlign="right">
                میتونی انتخاب کنی کدوم چرخه رو بهت نشون بدیم
              </Typography>

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
              className=" fixed bottom-0 w-full mx-auto py-3 z-40"
              style={{ backgroundColor: colors.White, maxWidth: MAX_SCREEN_WIDTH }}
            >
              <div className="flex flex-col justify-center items-center px-5">
                <Button
                  size="medium"
                  variant="fill"
                  color="primary"
                  fullWidth={true}
                  className="w-4/5"
                  isLoading={isLoading}
                  isDisable={!isModified}
                  onClick={submitHandler}
                >
                  ثبت تغییرات
                </Button>
              </div>
            </div>
          </div>
        </WomenPageLayout>
      )}
    </>
  );
};

export default EditCycleSettingPage;
