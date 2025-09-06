'use client';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import ShortcutItem from './ShortcutItem';

const data = [
  { imageUrl: '/assets/images/test.webp', title: 'ثبت نشانه‌ها' },
  { imageUrl: '/assets/images/test.webp', title: 'ثبت یادداشت' },
  { imageUrl: '/assets/images/test.webp', title: 'بیوریتم' },
  { imageUrl: '/assets/images/test.webp', title: 'برنامه‌های امروز' },
  { imageUrl: '/assets/images/test.webp', title: 'مقالات' },
];

const WidgetShortcut = () => {
  const { colors } = useTheme();
  return (
    <div className="w-full h-fit rounded-2xl p-4" style={{ backgroundColor: colors.Neutral_Background }}>
      <div
        className="flex justify-end items-center border-b-[1px] pb-3 mb-3"
        style={{ borderColor: colors.Neutral_Surface }}
      >
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          دسترسی سریع
        </Typography>
      </div>

      <div className="grid grid-cols-3 ">
        {data.map((item, index) => (
          <ShortcutItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WidgetShortcut;
