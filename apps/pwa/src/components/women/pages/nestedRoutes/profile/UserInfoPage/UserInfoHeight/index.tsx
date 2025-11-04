import MinusIcon from '@assets/icons/minus.svg';
import PlusIcon from '@assets/icons/plus.svg';

import Typography from '@components/ui/Typography';
import { ACTIVATION_HEIGHT_VALUES } from '@constants/activation.constants';
import useTheme from '@hooks/useTheme';

import { UserInfoHeightProps } from './types';

const UserInfoHeight = ({ value, valueHandler }: UserInfoHeightProps) => {
  const { colors } = useTheme();

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
    <div
      className="w-full h-10 rounded-xl flex items-center justify-between px-3"
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <div className="w-6 h-6 flex items-center justify-center" onClick={() => heightValueHandler(false)}>
        <MinusIcon style={{ width: '16px', height: 'auto', stroke: colors.Surface_Outline }} />
      </div>

      <Typography scale="Body" size="Large" color="Neutral_OnBackground">
        {updatedValue}
      </Typography>

      <div className="w-6 h-6 flex items-center justify-center" onClick={() => heightValueHandler(true)}>
        <PlusIcon style={{ width: '16px', height: 'auto', stroke: colors.Surface_Outline }} />
      </div>
    </div>
  );
};

export default UserInfoHeight;
