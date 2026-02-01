import { useState } from 'react';

import CycleLengthIcon from '@assets/icons/cycleLength.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useListMaker from '@components/activation/CyclesModule/__hooks__/useListMaker';
import Dark_Button from '@components/ui/Dark_Button';
import WheelPicker from '@components/ui/WheelPicker';

import { CycleLengthModalTypes } from './types';

const CycleLengthModal = ({ value, valueHandler, onClose }: CycleLengthModalTypes) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const { dataList } = useListMaker({ name: 'totalCycleLength' });

  const changeHandler = () => {
    valueHandler(selectedValue);
    onClose();
  };

  const updateDataList = dataList?.list.map((item) => ({ ...item, title: `\u200F${item.title} روز` })) ?? [];

  return (
    <>
      <CycleLengthIcon className="w-9 h-9 mb-2" />

      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        طول دوره
      </CustomTypography>

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

export default CycleLengthModal;
