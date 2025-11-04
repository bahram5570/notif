import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

const AiTopicChatbotListSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full flex flex-col items-end gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT + 20 }}
    >
      <div className="w-[120px] h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[150px] h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[60px] rounded-md my-2" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[120px] h-[20px] rounded-md ml-auto" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[120px] rounded-3xl" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="flex w-full gap-4">
        <div className="w-full h-[120px] rounded-3xl" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-full h-[120px] rounded-3xl" style={{ backgroundColor: colors.Neutral_Surface }} />
      </div>
    </div>
  );
};

export default AiTopicChatbotListSkeleton;
