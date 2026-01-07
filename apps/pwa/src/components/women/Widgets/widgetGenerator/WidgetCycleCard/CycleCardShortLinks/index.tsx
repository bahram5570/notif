import ShortcutItems from '../../WidgetShortcut/ShortcutItems';
import { CYCLE_CARD_SHORT_LINKS_HEIGHT } from '../constants';
import { CycleCardShortLinksProps } from './types';

const bottom = -(CYCLE_CARD_SHORT_LINKS_HEIGHT / 2) + 4;

const CycleCardShortLinks = ({ items }: CycleCardShortLinksProps) => {
  return (
    <div
      style={{ bottom, minHeight: CYCLE_CARD_SHORT_LINKS_HEIGHT }}
      className="absolute left-4 right-4 px-5 py-4 rounded-3xl gap-x-1 bg-impo_Neutral_Background"
    >
      <ShortcutItems items={items} />
    </div>
  );
};

export default CycleCardShortLinks;
