import useTheme from '@hooks/useTheme';

import ShortcutItem from '../../WidgetShortcut/ShortcutItem';
import { CYCLE_CARD_SHORT_LINKS_HEIGHT } from '../constants';
import { CycleCardShortLinksProps } from './types';

const bottom = -(CYCLE_CARD_SHORT_LINKS_HEIGHT / 2) + 4;

const CycleCardShortLinks = ({ items }: CycleCardShortLinksProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="absolute left-4 right-4 grid grid-cols-4 auto-cols-auto px-5 py-4 rounded-3xl"
      style={{
        bottom,
        direction: 'rtl',
        backgroundColor: colors.White,
        minHeight: CYCLE_CARD_SHORT_LINKS_HEIGHT,
      }}
    >
      {[...items, ...items].map((item, index) => (
        <ShortcutItem key={index} {...item} />
      ))}
    </div>
  );
};

export default CycleCardShortLinks;
