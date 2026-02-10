import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

const AiChatbotSkeleton = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] gap-6 pb-6 px-3 " style={{ paddingTop: HEADER_HEIGHT }}>
      <div className="w-3/6 h-[40px] rounded-md mt-2 bg-impo_Neutral_Surface" />
      <div className="w-full h-[150px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-3/6 h-[40px] rounded-md mt-2 bg-impo_Neutral_Surface" />
      <div className="w-full h-[150px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-3/6 h-[40px] rounded-md mt-2 bg-impo_Neutral_Surface" />
      <div className="w-full h-[150px] rounded-md bg-impo_Neutral_Surface" />
    </div>
  );
};

export default AiChatbotSkeleton;
