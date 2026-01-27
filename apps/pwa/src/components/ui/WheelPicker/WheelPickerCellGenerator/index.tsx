import { memo } from 'react';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';
import { addIdAttrs } from '@utils/scripts';

import useOperatingSystem from '@hooks/useOperatingSystem';

import { WheelPickerCellGeneratorProps } from './types';

const WheelPickerCellGenerator = ({
  isBeforeOrAfterSelectedItem,
  isSelectedItem,
  title,
}: WheelPickerCellGeneratorProps) => {
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Title_Medium', operatingSystem });

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
    <p
      {...addIdAttrs(isSelectedItem ? `wheelPickerCell_${title}` : '')}
      className={`duration-200 pointer-events-none ${colorFinder()}`}
      style={{ ...typographyFontStyles, scale }}
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
