import { memo } from 'react';

import { toPersianNumbers } from '@utils/numbers';
import { addIdAttrs } from '@utils/scripts';

import useTheme from '@hooks/useTheme';

import { WheelPickerCellGeneratorProps } from './types';

const WheelPickerCellGenerator = ({
  isBeforeOrAfterSelectedItem,
  isSelectedItem,
  title,
}: WheelPickerCellGeneratorProps) => {
  const { typography, colors } = useTheme();

  const colorFinder = () => {
    if (isSelectedItem) {
      return colors.Neutral_OnBackground;
    }

    if (isBeforeOrAfterSelectedItem) {
      return colors.Surface_Outline;
    }

    return colors.Transparent;
  };

  const scale = isSelectedItem ? '1' : '0.6';

  return (
    <p
      className={`duration-200 pointer-events-none  ${isSelectedItem && '!text-impo_Neutral_OnBackground'}`}
      style={{ ...typography.Title.Medium, scale, color: colorFinder() }}
      {...addIdAttrs(isSelectedItem ? `wheelPickerCell_${title}` : '')}
    >
      {toPersianNumbers(title)}
    </p>
  );
};

export default memo(WheelPickerCellGenerator, (prevProps, nextProps) => {
  return (
    prevProps.resetKey === nextProps.resetKey &&
    prevProps.isSelectedItem === nextProps.isSelectedItem &&
    prevProps.isBeforeOrAfterSelectedItem === nextProps.isBeforeOrAfterSelectedItem
  );
});
