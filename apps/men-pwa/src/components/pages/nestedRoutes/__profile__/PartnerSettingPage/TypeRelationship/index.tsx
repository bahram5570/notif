import { useEffect, useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import PartnerRadioButton from '@components/pages/mainRoutes/__partner__/PartnerPage/PartnerModals/PartnerRadioButton';

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
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Lable_MediumProminet">
            نوع رابطه
          </CustomTypography>
        </div>

        <PartnerRadioButton onChange={changeValueHandler} value={distanceTypeValue} />
      </div>
    </div>
  );
};

export default TypeRelationship;
