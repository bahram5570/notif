import useTheme from '@hooks/useTheme';

const SubscriptionSkeleton = () => {
  const { colors } = useTheme();
  return (
    <div className="flex relative z-0 flex-col justify-center items-center gap-6 pt-9 mt-3 h-dvh ">
      <div className="flex flex-col justify-center items-center  w-4/5 gap-9">
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center gap-6 animate-skeleton w-full">
              <div className="w-full h-[150px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[200px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[48px] rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[300px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSkeleton;
