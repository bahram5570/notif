import { useState } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { WheelPicker } from '@repo/core/components/ui/WheelPicker';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { ConditionModalPropsType } from './type';

const ConditionModal = ({ name, onChange, onCloseModal, value }: ConditionModalPropsType) => {
  const [values, setValues] = useState<number>(Number(value));
  const { pageNavigationHandler } = usePageNavigationLoading();

  const stateValuesHandler: (v: number | string) => void = (v) => {
    setValues(Number(v));
  };

  const onChangeHandler = () => {
    onChange(values, name);
    onCloseModal();
  };

  const conditionList = [
    { title: 'ناشتا', value: 0 },
    { title: 'دو ساعت بعد از غذا', value: 1 },
  ];

  return (
    <>
      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        زمان اندازه‌گیری قند خونت رو انتخاب کن
      </CustomTypography>
      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        <>
          <span className="absolute left-0 right-0 h-10   pointer-events-none rounded-full bg-impo_Neutral_Surface" />
          <WheelPicker list={conditionList} defaultValue={values} valueHandler={(v) => stateValuesHandler(v)} />
        </>
      </div>

      <CustomButton
        onClick={() => {
          (onChangeHandler(), pageNavigationHandler({ navigationType: 'logo', id: name }));
        }}
        fontSize="Lable_Large"
      >
        ثبت اطلاعات
      </CustomButton>
    </>
  );
};

export default ConditionModal;
