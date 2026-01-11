'use client';

import { Fragment } from 'react';

import Dark_Button from '@components/ui/Dark_Button';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { ChildTypeEnum } from '@constants/activation.constants';

import BreastfeedingSettingInputGenerator from './BreastfeedingSettingInputGenerator';
import BreastfeedingSettingModal from './BreastfeedingSettingModal';
import useModifiedData from './__hooks__/useModifiedData';
import useSubmit from './__hooks__/useSubmit';
import { BREASTFEEDING_SETTING_INPUT_GENERATOR_LIST } from './constants';

const BreastfeedingSettingsPage = () => {
  const { changeValueHandler, checkIsModified, values, checkIsEmptyChildName } = useModifiedData();

  const { submitHandler, isLoading } = useSubmit(values);

  return (
    <WomenPageLayout
      rightElement="BackButton"
      className="bg-impo_Neutral_Surface"
      rightElementScript="ویرایش اطلاعات زایمان"
    >
      <div className="flex relative z-0 flex-col items-center gap-6 pb-6 ">
        <div className="flex flex-col items-center gap-2 px-4 w-full">
          {BREASTFEEDING_SETTING_INPUT_GENERATOR_LIST.map((item, index) => {
            if (item.name === 'childName' && values.childType === ChildTypeEnum.Twin) {
              return <Fragment key={index} />;
            }

            return (
              <BreastfeedingSettingInputGenerator
                {...item}
                key={index}
                value={values[item.name]}
                changeValueHandler={changeValueHandler}
              />
            );
          })}
        </div>

        <div className="flex flex-col justify-center items-center mt-auto">
          <Dark_Button
            className="w-2/4"
            isLoading={isLoading}
            onClick={submitHandler}
            isDisable={!checkIsModified() || checkIsEmptyChildName()}
          >
            ویرایش
          </Dark_Button>
        </div>
      </div>

      <BreastfeedingSettingModal changeValueHandler={changeValueHandler} value={values} />
    </WomenPageLayout>
  );
};

export default BreastfeedingSettingsPage;
