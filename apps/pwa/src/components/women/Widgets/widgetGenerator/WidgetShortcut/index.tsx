'use client';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import ShortcutItems from './ShortcutItems';
import { ShortcutWidgetCardProps } from './type';

const WidgetShortcut = ({ data }: ShortcutWidgetCardProps) => {
  const { colors } = useTheme();

  return (
    <div className="w-full h-fit rounded-2xl px-4 pt-4 pb-6" style={{ backgroundColor: colors.Neutral_Background }}>
      <div
        className="flex justify-end items-center border-b-[1px] pb-3 mb-3"
        style={{ borderColor: colors.Neutral_Surface }}
      >
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          {data.title}
        </Typography>
      </div>

      <ShortcutItems items={data.items} />
    </div>
  );
};

export default WidgetShortcut;
