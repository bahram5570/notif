import ShortcutItems from '../../../WidgetShortcut/ShortcutItems';
import { CIRCLE_CARD_SHORT_LINKS_HEIGHT } from '../constants';
import { CycleCardShortLinksProps } from './types';

const bottom = -(CIRCLE_CARD_SHORT_LINKS_HEIGHT / 2) + 16;

const CycleCardShortLinks = ({ items }: CycleCardShortLinksProps) => {
  return (
    <div className="px-4 pt-4">
      <div
        className="px-5 py-4 rounded-3xl bg-impo_Neutral_Background"
        style={{
          bottom,
          direction: 'rtl',
          minHeight: CIRCLE_CARD_SHORT_LINKS_HEIGHT,
        }}
      >
        <ShortcutItems items={items} />
      </div>
    </div>
  );
};

export default CycleCardShortLinks;
