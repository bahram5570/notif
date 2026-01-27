import RoutinTabSkeleton from './RoutinTabSkeleton';

const RoutinTabsContextSkeleton = () => {
  return (
    <div className="py-5 flex flex-col gap-2 animate-skeleton">
      <div className="flex flex-row-reverse gap-3">
        <div className="w-24 h-8 min-w-24 min-h-8 rounded-full bg-impo_Neutral_Surface" />
        <div className="w-24 h-8 min-w-24 min-h-8 rounded-full bg-impo_Neutral_Surface" />
        <div className="w-[119px] h-8 min-w-[119px] min-h-8 rounded-full bg-impo_Neutral_Surface" />
        <div className="w-[119px] h-8 min-w-[119px] min-h-8 rounded-full bg-impo_Neutral_Surface" />
      </div>
      <div className="w-full border-[1px] bg-impo_Neutral_Surface border-impo_Neutral_Surface" />
      <RoutinTabSkeleton />
    </div>
  );
};

export default RoutinTabsContextSkeleton;
