const SubscriptionSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-4 pt-5 animate-skeleton">
      <div className="w-full h-[150px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[200px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[48px] rounded-full bg-impo_Neutral_Surface" />
      <div className="w-full h-[200px] rounded-md bg-impo_Neutral_Surface" />
    </div>
  );
};

export default SubscriptionSkeleton;
