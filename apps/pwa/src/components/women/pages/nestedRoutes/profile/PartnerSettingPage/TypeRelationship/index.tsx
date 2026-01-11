import { useEffect, useState } from 'react';

import Dark_Typography from '@components/ui/Dark_Typography';
import PartnerRadioButton from '@components/women/pages/mainRoutes/partner/PartnerPage/PartnerModals/PartnerRadioButton';

import useChangeType from './__hooks__/useChangeType';
import { TypeRelationshipPropsType } from './type';

const TypeRelationship = ({ distanceType }: TypeRelationshipPropsType) => {
  const { changeTypeHandler } = useChangeType();
  const [distanceTypeValue, setDistanceTypeValue] = useState<number>(distanceType);

  const changeValueHandler = (value: number) => {
    setDistanceTypeValue(value);
  };

  useEffect(() => {
    changeTypeHandler(distanceTypeValue);
  }, [distanceTypeValue]);

  return (
    <div className="p-4 rounded-xl bg-impo_Neutral_Background">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-end">
          <Dark_Typography className="text-impo_Primary_Primary" fontSize="Lable_MediumProminet">
            نوع رابطه
          </Dark_Typography>
        </div>

        <PartnerRadioButton onChange={changeValueHandler} value={distanceTypeValue} />
      </div>
    </div>
  );
};

export default TypeRelationship;
