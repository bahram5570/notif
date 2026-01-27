import { useState } from 'react';

import Hamdel from '@assets/icons/hamdel.svg';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import PartnerRadioButton from './PartnerRadioButton';
import useAccept from './__hooks__/useAccept';

const TypeRelationship = () => {
  const { acceptHandler } = useAccept();
  const { getQueryParams } = useQueryParamsHandler();
  const [distanceTypeValue, setDistanceTypeValue] = useState<number>(0);

  const id = getQueryParams('id');

  const changeValueHandler = (value: number) => {
    setDistanceTypeValue(value);
  };

  const onClick = () => {
    acceptHandler(id, distanceTypeValue);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-11 h-11 flex justify-center items-center rounded-full bg-impo_Primary_PrimaryContainer">
          <Hamdel className="w-6 h-6  stroke-impo_Primary_Primary" />
        </div>
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          نوع رابطه
        </Dark_Typography>
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_Outline">
          می‌تونی بعدا نوع رابطه رو در قسمت پروفایل ویرایش کنی
        </Dark_Typography>
      </div>

      <PartnerRadioButton onChange={changeValueHandler} value={distanceTypeValue} />

      <Dark_Button onClick={onClick}>
        <Dark_Typography fontSize="Lable_Large" className="text-impo_White">
          باشه
        </Dark_Typography>
      </Dark_Button>
    </div>
  );
};

export default TypeRelationship;
