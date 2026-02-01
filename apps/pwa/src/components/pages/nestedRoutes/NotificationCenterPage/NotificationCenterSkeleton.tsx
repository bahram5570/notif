const NotificationCenterSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 px-4 animate-skeleton">
      <div className="w-[90px] h-[90px] min-w-[90px] min-h-[90px] rounded-full bg-impo_Neutral_Surface" />
      <div className="w-[120px] h-[20px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-[120px] h-[20px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[60px] rounded-md my-2 bg-impo_Neutral_Surface" />
      <div className="w-[120px] h-[20px] rounded-md ml-auto bg-impo_Neutral_Surface" />
      <div className="w-full h-[60px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[40px] rounded-md mt-2 bg-impo_Neutral_Surface" />
      <div className="w-full h-[40px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[40px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[40px] rounded-md bg-impo_Neutral_Surface" />
    </div>
  );
};

export default NotificationCenterSkeleton;
