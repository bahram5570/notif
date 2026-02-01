import { useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Button from '@components/ui/Dark_Button';
import WheelPicker from '@components/ui/WheelPicker';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { ValueModalPropsType } from './type';

const ValueModal = ({ name, onChange, onCloseModal, value }: ValueModalPropsType) => {
  const defaultValue = Number(value) || 100;
  const [values, setValues] = useState<number>(defaultValue);
  const { pageNavigationHandler } = usePageNavigationLoading();

  const stateValuesHandler: (v: number | string) => void = (v) => {
    setValues(Number(v));
  };

  const onChangeHandler = () => {
    onChange(values, name);
    onCloseModal();
  };

  const generateList = (start: number, end: number, step: number) => {
    const list = [];
    for (let value = start; value <= end; value += step) {
      list.push({ value, title: `${value}` });
    }
    return list;
  };

  const list = generateList(10, 300, 1);

  return (
    <>
      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        میزان قند خونت رو انتخاب کن
      </CustomTypography>
      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        <>
          <span className="absolute left-0 right-0 h-10   pointer-events-none rounded-full bg-impo_Neutral_Surface">
            <div className="flex justify-center items-center h-full ml-36">
              <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
                mg/dL
              </CustomTypography>
            </div>
          </span>

          <WheelPicker list={list} defaultValue={values} valueHandler={(v) => stateValuesHandler(v)} />
        </>
      </div>

      <Dark_Button
        onClick={() => {
          (onChangeHandler(), pageNavigationHandler({ showProgressBar: true, id: name }));
        }}
        fontSize="Lable_Large"
      >
        ثبت اطلاعات
      </Dark_Button>
    </>
  );
};

export default ValueModal;
