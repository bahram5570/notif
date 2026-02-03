import { WHEEL_PICKER_CELL_HEIGHT } from './constants';
import { WheelPickerDividerProps } from './types';

export const WheelPickerDivider = ({ isTop }: WheelPickerDividerProps) => {
  const position = isTop ? { top: WHEEL_PICKER_CELL_HEIGHT * 2 } : { bottom: WHEEL_PICKER_CELL_HEIGHT * 2 };

  return (
    <span
      style={{ ...position }}
      className="absolute left-0 right-0 h-[1px] opacity-15 bg-impo_Neutral_OnBackground pointer-events-none"
    />
  );
};
