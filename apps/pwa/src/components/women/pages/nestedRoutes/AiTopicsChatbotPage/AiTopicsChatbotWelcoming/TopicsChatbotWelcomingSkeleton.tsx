import useTheme from '@hooks/useTheme';

const TopicsChatbotWelcomingSkeleton = () => {
  const { colors } = useTheme();
  return (
    <div className="w-full flex flex-col items-center gap-4 px-4 animate-skeleton">
      <div className="w-full h-[60px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[40px] rounded-md mt-2" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[40px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[40px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[40px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default TopicsChatbotWelcomingSkeleton;
