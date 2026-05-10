import { useMemo, useState } from 'react';

import Hamdel from '@assets/shared/icons/hamdel.svg';

import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../../hooks/useSystem';
import { CustomButton } from '../../../ui/CustomButton';
import { CustomTypography } from '../../../ui/CustomTypography';
import { PartnerRadioButton } from '../../PartnerRadioButton';
import useAccept from './__hooks__/useAccept';

const TypeRelationship = () => {
  const { appName } = useSystem();
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

  const theme = useMemo<{ backgroundColor: string; className: string; stroke: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          backgroundColor: 'bg-impo_PrimaryMan_PrimaryContainerMan',
          className: '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan',
          stroke: 'stroke-impo_PrimaryMan_PrimaryMan',
        };

      default:
        return {
          backgroundColor: 'bg-impo_Primary_PrimaryContainer',
          className: '',
          stroke: 'stroke-impo_Primary_Primary',
        };
    }
  }, [appName]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className={`w-11 h-11 flex justify-center items-center rounded-full  ${theme.backgroundColor}`}>
          <Hamdel className={`w-6 h-6   ${theme.stroke}`} />
        </div>

        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          نوع رابطه
        </CustomTypography>

        <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
          می‌تونی بعدا نوع رابطه رو در قسمت پروفایل ویرایش کنی
        </CustomTypography>
      </div>

      <PartnerRadioButton onChange={changeValueHandler} value={distanceTypeValue} />

      <CustomButton onClick={onClick} className={theme.className}>
        <CustomTypography fontSize="Lable_Large" className="text-impo_White">
          باشه
        </CustomTypography>
      </CustomButton>
    </div>
  );
};

export default TypeRelationship;
