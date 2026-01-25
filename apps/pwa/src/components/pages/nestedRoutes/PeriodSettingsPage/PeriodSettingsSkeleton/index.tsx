const PeriodSettingsSkeleton = () => {
  return (
    <div className="w-full h-[100dvh] flex flex-col items-center gap-3 px-4 animate-skeleton">
      <div className="w-full rounded-xl flex flex-col items-end gap-2 p-4 bg-impo_White">
        <div className="w-[160px] h-[20px] rounded-md bg-impo_Neutral_Surface" />
        <div className="w-[60px] h-[20px] rounded-md bg-impo_Neutral_Surface" />
        <div className="w-full h-[20px] rounded-md bg-impo_Neutral_Surface" />
        <div className="w-[160px] h-[20px] rounded-md mt-5 bg-impo_Neutral_Surface" />
        <div className="w-full h-[20px] rounded-md bg-impo_Neutral_Surface" />
        <div className="w-[60px] h-[20px] rounded-md bg-impo_Neutral_Surface" />
      </div>
    </div>
  );
};

export default PeriodSettingsSkeleton;
