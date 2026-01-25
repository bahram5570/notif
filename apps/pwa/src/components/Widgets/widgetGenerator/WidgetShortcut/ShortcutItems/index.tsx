import ShortcutItemGenerator from './ShortcutItemGenerator';
import { SHORTCUT_ITEMS_ROW_COUNT } from './constants';
import { ShorcutItemChildTypes, ShortcutItemsProps } from './types';

const ShortcutItems = ({ items }: ShortcutItemsProps) => {
  return (
    <div className="grid grid-cols-4 gap-4" style={{ direction: 'rtl' }}>
      {items.map((item, index) => {
        const mod = index % SHORTCUT_ITEMS_ROW_COUNT;
        let shorcutItemChild: ShorcutItemChildTypes = null;

        switch (mod) {
          case 0:
            shorcutItemChild = 'first';
            break;
          case SHORTCUT_ITEMS_ROW_COUNT - 1:
            shorcutItemChild = 'last';
            break;
        }

        return <ShortcutItemGenerator {...item} shorcutItemChild={shorcutItemChild} key={index} />;
      })}
    </div>
  );
};

export default ShortcutItems;
