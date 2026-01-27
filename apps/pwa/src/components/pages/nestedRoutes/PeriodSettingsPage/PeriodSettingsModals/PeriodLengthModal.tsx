import { useState } from 'react';

import BloodIcon from '@assets/icons/Blood.svg';

import useListMaker from '@components/activation/CyclesModule/__hooks__/useListMaker';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import WheelPicker from '@components/ui/WheelPicker';

import { PeriodLengthModalTypes } from './types';

const PeriodLengthModal = ({ value, totalCycleLength, valueHandler, onClose }: PeriodLengthModalTypes) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const { dataList } = useListMaker({ name: 'periodLength', totalCycleLength });

  const changeHandler = () => {
    valueHandler(selectedValue);
    onClose();
  };

  const updateDataList = dataList?.list.map((item) => ({ ...item, title: `\u200F${item.title} روز` })) ?? [];

  return (
    <>
      <BloodIcon className="w-9 h-9 mb-2" />

      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        طول پریود
      </Dark_Typography>

      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        {dataList && (
          <>
            <span className="absolute left-0 right-0 h-10 pointer-events-none rounded-full bg-impo_Neutral_Surface" />

            <WheelPicker list={updateDataList} defaultValue={value} valueHandler={(v) => setSelectedValue(+v)} />
          </>
        )}
      </div>

      <Dark_Button fontSize="Lable_Large" onClick={changeHandler}>
        ذخیره
      </Dark_Button>
    </>
  );
};

export default PeriodLengthModal;
