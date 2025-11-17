import useTheme from '@hooks/useTheme';

import ShortcutItems from '../../../WidgetShortcut/ShortcutItems';
import { CIRCLE_CARD_SHORT_LINKS_HEIGHT } from '../constants';
import { CycleCardShortLinksProps } from './types';

const bottom = -(CIRCLE_CARD_SHORT_LINKS_HEIGHT / 2) + 16;

const CycleCardShortLinks = ({ items }: CycleCardShortLinksProps) => {
  const { colors } = useTheme();

  return (
    <div className="px-4 pt-4">
      <div
        className="px-5 py-4 rounded-3xl"
        style={{
          bottom,
          direction: 'rtl',
          backgroundColor: colors.White,
          minHeight: CIRCLE_CARD_SHORT_LINKS_HEIGHT,
        }}
      >
        <ShortcutItems items={items} />
      </div>
    </div>
  );
};

export default CycleCardShortLinks;
