const ChatSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 px-4 animate-skeleton">
      <div className="w-[240px] h-[80px] rounded-xl ml-auto bg-impo_Neutral_Surface" />
      <div className="w-[240px] h-[80px] rounded-xl ml-auto bg-impo_Neutral_Surface" />
      <div className="w-[240px] h-[80px] rounded-xl bg-impo_Neutral_Surface" />
      <div className="w-[240px] h-[80px] rounded-xl ml-auto bg-impo_Neutral_Surface" />
    </div>
  );
};

export default ChatSkeleton;
