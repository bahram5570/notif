import { useEffect, useState } from 'react';

import { WHEEL_PICKER_EXTRA_CELLS } from '../../constants';
import { UseWheelPickerListDataProps, WheelPickerListDataTypes } from './types';

const useWheelPickerListData = ({ list, defaultValue }: UseWheelPickerListDataProps) => {
  const [wheelPickerListData, setWheelPickerListData] = useState<null | WheelPickerListDataTypes>(null);

  useEffect(() => {
    const updatedList = [...list];

    // # Add extra spaces to the end and beginning of the list
    for (let i = 0; i < WHEEL_PICKER_EXTRA_CELLS; i++) {
      updatedList.push({ title: '', value: '' });
      updatedList.unshift({ title: '', value: '' });
    }

    const initialIndex = updatedList.findIndex((item) => item.value === defaultValue);
    const initialSlide = initialIndex > -1 ? initialIndex - WHEEL_PICKER_EXTRA_CELLS : 0;

    setWheelPickerListData({ updatedList, initialSlide });
  }, [list, defaultValue]);

  const listIsUpdated = `${wheelPickerListData?.updatedList[0 + WHEEL_PICKER_EXTRA_CELLS].value} - 
  ${wheelPickerListData?.updatedList[wheelPickerListData?.updatedList.length - 1 - WHEEL_PICKER_EXTRA_CELLS].value}`;

  return { wheelPickerListData, listIsUpdated };
};

export default useWheelPickerListData;
