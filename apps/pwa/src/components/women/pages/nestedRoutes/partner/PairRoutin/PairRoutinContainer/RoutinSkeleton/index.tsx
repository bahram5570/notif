const RoutinSkeleton = () => {
  const list = [1, 2, 3, 4, 5];

  return (
    <div className="w-full flex flex-col gap-4 animate-skeleton">
      <div className="flex items-center justify-between">
        <div className="w-[88px] h-[88px] rounded-full bg-impo_White" />

        <div className="flex flex-col items-end gap-2">
          <div className="w-[140px] h-[20px] rounded-md bg-impo_White" />
          <div className="w-[240px] h-[20px] rounded-md bg-impo_White" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 rounded-xl p-3">
        <div className="w-full flex items-center justify-end gap-2">
          <div className="flex flex-col items-end gap-2">
            <div className="w-[140px] h-[12px] rounded-md bg-impo_Neutral_Surface" />
            <div className="w-[240px] h-[12px] rounded-md bg-impo_Neutral_Surface" />
          </div>

          <div className="w-[40px] h-[40px] rounded-full bg-impo_Neutral_Surface" />
        </div>

        <div className="w-[140px] h-[20px] rounded-md ml-auto my-2 bg-impo_Neutral_Surface" />

        {list.map((item) => (
          <div className="w-full flex items-center justify-end gap-2" key={item}>
            <div className="flex flex-col items-end gap-2">
              <div className="w-[140px] h-[12px] rounded-md bg-impo_Neutral_Surface" />
              <div className="w-[240px] h-[12px] rounded-md bg-impo_Neutral_Surface" />
            </div>

            <div className="w-[48px] h-[48px] rounded-full bg-impo_Neutral_Surface" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutinSkeleton;
