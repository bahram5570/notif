import useTheme from '@hooks/useTheme';

const PeriodSettingsSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full h-[100dvh] flex flex-col items-center gap-3 px-4 animate-skeleton">
      <div className="w-full rounded-xl flex flex-col items-end gap-2 p-4" style={{ backgroundColor: colors.White }}>
        <div className="w-[160px] h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-[60px] h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-full h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-[160px] h-[20px] rounded-md mt-5" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-full h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-[60px] h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      </div>
    </div>
  );
};

export default PeriodSettingsSkeleton;
