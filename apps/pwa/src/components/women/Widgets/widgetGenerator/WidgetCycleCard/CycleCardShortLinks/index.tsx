import useTheme from '@hooks/useTheme';

import ShortcutItem from '../../WidgetShortcut/ShortcutItem';
import { ShorcutItemChildTypes } from '../../WidgetShortcut/type';
import { CYCLE_CARD_SHORT_LINKS_HEIGHT, CYCLE_CARD_SHORT_LINKS_ROW_ITMES_COUNT } from '../constants';
import { CycleCardShortLinksProps } from './types';

const bottom = -(CYCLE_CARD_SHORT_LINKS_HEIGHT / 2) + 4;

const CycleCardShortLinks = ({ items }: CycleCardShortLinksProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="absolute left-4 right-4 grid grid-cols-4 px-5 py-4 rounded-3xl gap-x-1"
      style={{
        bottom,
        direction: 'rtl',
        backgroundColor: colors.White,
        minHeight: CYCLE_CARD_SHORT_LINKS_HEIGHT,
      }}
    >
      {items.map((item, index) => {
        const mod = index % CYCLE_CARD_SHORT_LINKS_ROW_ITMES_COUNT;
        let shorcutItemChild: ShorcutItemChildTypes = null;

        switch (mod) {
          case 0:
            shorcutItemChild = 'first';
            break;
          case CYCLE_CARD_SHORT_LINKS_ROW_ITMES_COUNT - 1:
            shorcutItemChild = 'last';
            break;
        }

        return <ShortcutItem key={index} {...item} shorcutItemChild={shorcutItemChild} />;
      })}
    </div>
  );
};

export default CycleCardShortLinks;
