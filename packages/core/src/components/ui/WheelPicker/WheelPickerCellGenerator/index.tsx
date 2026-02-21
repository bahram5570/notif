import { memo } from 'react';

import { toPersianNumbers } from '../../../../utils/numbers';
import { typographyFontStylesMaker } from '../../../../utils/system';

import { useSystem } from '../../../../hooks/useSystem';
import { WheelPickerCellGeneratorProps } from './types';

const WheelPickerCellGenerator = ({
  isBeforeOrAfterSelectedItem,
  isSelectedItem,
  title,
}: WheelPickerCellGeneratorProps) => {
  const { operatingSystem, breakPoint } = useSystem();

  const typographyFontStyles = typographyFontStylesMaker({
    operatingSystem,
    fontSize: 'Title_Medium',
    isLargeScreen: !breakPoint.laptop,
  });

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
    <p className={`duration-200 pointer-events-none ${colorFinder()}`} style={{ ...typographyFontStyles, scale }}>
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
