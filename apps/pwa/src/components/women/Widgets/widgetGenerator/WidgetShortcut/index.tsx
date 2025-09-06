'use client';

import { colorFormatConverter } from '@utils/scripts';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import ShortcutItem from './ShortcutItem';
import { ShortcutWidgetCardProps } from './type';

const WidgetShortcut = ({ data }: ShortcutWidgetCardProps) => {
  const { colors } = useTheme();
  return (
    <div
      className="w-full h-fit rounded-2xl p-4 "
      style={{ backgroundColor: colorFormatConverter(data.backgroundColour) }}
    >
      <div
        className="flex justify-end items-center border-b-[1px] pb-3 mb-3"
        style={{ borderColor: colors.Neutral_Surface }}
      >
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          {data.title}
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-3" style={{ direction: 'rtl' }}>
        {data.items.map((item, index) => (
          <ShortcutItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WidgetShortcut;
