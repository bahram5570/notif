import useTheme from '@hooks/useTheme';

const SubscriptionSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-4 pt-5 animate-skeleton">
      <div className="w-full h-[150px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[200px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[48px] rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[200px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default SubscriptionSkeleton;
