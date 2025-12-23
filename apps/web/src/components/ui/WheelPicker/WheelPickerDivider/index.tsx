import { WHEEL_PICKER_CELL_HEIGHT } from '../constants';
import { WheelPickerDividerProps } from './types';

const WheelPickerDivider = ({ isTop }: WheelPickerDividerProps) => {
  const position = isTop ? { top: WHEEL_PICKER_CELL_HEIGHT * 2 } : { bottom: WHEEL_PICKER_CELL_HEIGHT * 2 };

  return (
    <span
      className="absolute left-0 right-0 h-[1px] opacity-15 bg-impo_Neutral_OnBackground pointer-events-none"
      style={{ ...position }}
    />
  );
};

export default WheelPickerDivider;
