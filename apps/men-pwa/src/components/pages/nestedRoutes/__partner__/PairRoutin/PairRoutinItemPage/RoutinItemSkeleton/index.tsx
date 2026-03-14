const RoutinItemSkeleton = () => {
  const list = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full animate-skeleton">
      <div className="flex items-center justify-between pb-10">
        <div className="w-[88px] h-[88px] rounded-full bg-impo_White" />

        <div className="flex flex-col items-end gap-2">
          <div className="w-[140px] h-[20px] rounded-md bg-impo_White" />
          <div className="w-[240px] h-[20px] rounded-md bg-impo_White" />
        </div>
      </div>

      <div className="w-full flex flex-col items-end gap-4">
        <div className="w-[240px] h-[20px] rounded-md bg-impo_Neutral_Surface" />

        {list.map((item) => (
          <div key={item} className="w-full h-[12px] rounded-md bg-impo_Neutral_Surface" />
        ))}
      </div>
    </div>
  );
};

export default RoutinItemSkeleton;
