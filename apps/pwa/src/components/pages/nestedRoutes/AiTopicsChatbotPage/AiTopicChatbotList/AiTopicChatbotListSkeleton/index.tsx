import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';

const AiTopicChatbotListSkeleton = () => {
  return (
    <div
      className="w-full flex flex-col items-end gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT + 20 }}
    >
      <div className="w-[120px] h-[20px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-[150px] h-[20px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[60px] rounded-md my-2 bg-impo_Neutral_Surface" />
      <div className="w-[120px] h-[20px] rounded-md ml-auto bg-impo_Neutral_Surface" />
      <div className="w-full h-[120px] rounded-3xl bg-impo_Neutral_Surface" />
      <div className="flex w-full gap-4">
        <div className="w-full h-[120px] rounded-3xl bg-impo_Neutral_Surface" />
        <div className="w-full h-[120px] rounded-3xl bg-impo_Neutral_Surface" />
      </div>
    </div>
  );
};

export default AiTopicChatbotListSkeleton;
