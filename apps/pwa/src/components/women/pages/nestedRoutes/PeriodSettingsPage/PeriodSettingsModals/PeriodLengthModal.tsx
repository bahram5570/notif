import { useState } from 'react';

import BloodIcon from '@assets/icons/Blood.svg';

import useListMaker from '@components/activation/CyclesModule/__hooks__/useListMaker';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WheelPicker from '@components/ui/WheelPicker';
import useTheme from '@hooks/useTheme';

import { PeriodLengthModalTypes } from './types';

const PeriodLengthModal = ({ value, totalCycleLength, valueHandler, onClose }: PeriodLengthModalTypes) => {
  const { colors } = useTheme();
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

      <Typography scale="Title" size="Small">
        طول پریود
      </Typography>

      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        {dataList && (
          <>
            <span
              style={{ background: colors.Neutral_Surface }}
              className="absolute left-0 right-0 h-10 pointer-events-none rounded-full"
            />

            <WheelPicker list={updateDataList} defaultValue={value} valueHandler={(v) => setSelectedValue(+v)} />
          </>
        )}
      </div>

      <Button variant="fill" size="medium" color="primary" onClick={changeHandler}>
        ذخیره
      </Button>
    </>
  );
};

export default PeriodLengthModal;
