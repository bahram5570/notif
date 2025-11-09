import useTheme from '@hooks/useTheme';

// import { ShortcutItemType } from '@providers/WidgetActionsProvider/widgetCards';

// import ShortcutItem from '../../WidgetShortcut/ShortcutItem';
import { CYCLE_CARD_SHORT_LINKS_HEIGHT } from '../constants';

const bottom = -(CYCLE_CARD_SHORT_LINKS_HEIGHT / 2);

const CycleCardShortLinks = () => {
  const { colors } = useTheme();

  // const data: ShortcutItemType[] = [];
  // <div className="grid grid-cols-3 gap-4" style={{ direction: 'rtl' }}>
  //   {data.map((item, index) => (
  //     <ShortcutItem key={index} {...item} />
  //   ))}
  // </div>;

  return (
    <div
      className="absolute left-4 right-4 grid grid-cols-4 px-5 py-4 rounded-3xl h-fit"
      style={{
        bottom,
        backgroundColor: colors.White,
        minHeight: CYCLE_CARD_SHORT_LINKS_HEIGHT,
      }}
    >
      <div className="w-14 aspect-square bg-red-300"></div>
      <div className="w-14 aspect-square bg-red-300"></div>
      <div className="w-14 aspect-square bg-red-300"></div>
      <div className="w-14 aspect-square bg-red-300"></div>
    </div>
  );
};

export default CycleCardShortLinks;
