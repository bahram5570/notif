import useTheme from '@hooks/useTheme';

import ShortcutItem from '../../../WidgetShortcut/ShortcutItem';
import { CIRCLE_CARD_SHORT_LINKS_HEIGHT } from '../constants';
import { CycleCardShortLinksProps } from './types';

const bottom = -(CIRCLE_CARD_SHORT_LINKS_HEIGHT / 2) + 16;

const CycleCardShortLinks = ({ items }: CycleCardShortLinksProps) => {
  const { colors } = useTheme();

  return (
    <div className="px-4 pt-4">
      <div
        className="grid grid-cols-4 px-5 py-4 rounded-3xl"
        style={{
          bottom,
          backgroundColor: colors.White,
          minHeight: CIRCLE_CARD_SHORT_LINKS_HEIGHT,
        }}
      >
        {items.map((item, index) => (
          <ShortcutItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CycleCardShortLinks;
