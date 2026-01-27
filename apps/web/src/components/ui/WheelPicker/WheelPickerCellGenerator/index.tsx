import { memo } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import { FONTS_ANDROID } from '@repo/core/theme/fonts';

import { WheelPickerCellGeneratorProps } from './types';

const WheelPickerCellGenerator = ({
  isBeforeOrAfterSelectedItem,
  isSelectedItem,
  title,
}: WheelPickerCellGeneratorProps) => {
  const colorFinder = () => {
    if (isSelectedItem) {
      return 'text-impo_Neutral_OnBackground';
    }

    if (isBeforeOrAfterSelectedItem) {
      return 'text-impo_Surface_Outline';
    }

    return 'text-impo_Transparent';
  };

  const scale = isSelectedItem ? '1' : '0.6';

  return (
    <p className={`duration-200 pointer-events-none ${colorFinder()}`} style={{ ...FONTS_ANDROID.Title_Medium, scale }}>
      {toPersianNumbers(title)}
    </p>
  );
};

export default memo(WheelPickerCellGenerator, (prevProps, nextProps) => {
  return (
    prevProps.isSelectedItem === nextProps.isSelectedItem &&
    prevProps.isBeforeOrAfterSelectedItem === nextProps.isBeforeOrAfterSelectedItem
  );
});
