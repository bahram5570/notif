import MinusIcon from '@assets/icons/minus.svg';
import PlusIcon from '@assets/icons/plus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ACTIVATION_HEIGHT_VALUES } from '@constants/activation.constants';

import { UserInfoHeightProps } from './types';

const UserInfoHeight = ({ value, valueHandler }: UserInfoHeightProps) => {
  const hasValue = value > 0;
  const updatedValue = hasValue ? `${value}${ACTIVATION_HEIGHT_VALUES.unit}` : '---';

  const heightValueHandler = (isPlus: boolean) => {
    let result = 0;

    if (hasValue) {
      if (isPlus) {
        if (value >= ACTIVATION_HEIGHT_VALUES.max) {
          result = ACTIVATION_HEIGHT_VALUES.max;
        } else {
          result = value + 1;
        }
      } else {
        if (value <= ACTIVATION_HEIGHT_VALUES.min) {
          result = ACTIVATION_HEIGHT_VALUES.min;
        } else {
          result = value - 1;
        }
      }
    } else {
      result = ACTIVATION_HEIGHT_VALUES.defaultValue;
    }

    valueHandler(result);
  };

  return (
    <div className="w-full h-10 rounded-xl flex items-center justify-between px-3 bg-impo_Surface_SurfaceVariant">
      <div className="w-6 h-6 flex items-center justify-center" onClick={() => heightValueHandler(false)}>
        <MinusIcon className="stroke-impo_Surface_Outline" style={{ width: '16px', height: 'auto' }} />
      </div>

      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        {updatedValue}
      </CustomTypography>

      <div className="w-6 h-6 flex items-center justify-center" onClick={() => heightValueHandler(true)}>
        <PlusIcon className="stroke-impo_Surface_Outline" style={{ width: '16px', height: 'auto' }} />
      </div>
    </div>
  );
};

export default UserInfoHeight;
