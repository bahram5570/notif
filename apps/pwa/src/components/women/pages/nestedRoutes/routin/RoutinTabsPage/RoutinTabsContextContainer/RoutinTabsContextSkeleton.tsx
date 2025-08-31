import useTheme from '@hooks/useTheme';

import RoutinTabSkeleton from './RoutinTabSkeleton';

const RoutinTabsContextSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div className="py-5 flex flex-col gap-2">
      <div className="flex flex-row-reverse gap-3">
        <div className="w-24 h-8 min-w-24 min-h-8 rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-24 h-8 min-w-24 min-h-8 rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div
          className="w-[119px] h-8 min-w-[119px] min-h-8 rounded-full"
          style={{ backgroundColor: colors.Neutral_Surface }}
        />
        <div
          className="w-[119px] h-8 min-w-[119px] min-h-8 rounded-full"
          style={{ backgroundColor: colors.Neutral_Surface }}
        />
      </div>
      <div
        className="w-full border-[1px]"
        style={{ backgroundColor: colors.Neutral_Surface, borderColor: colors.Neutral_Surface }}
      />
      <RoutinTabSkeleton />
    </div>
  );
};

export default RoutinTabsContextSkeleton;
