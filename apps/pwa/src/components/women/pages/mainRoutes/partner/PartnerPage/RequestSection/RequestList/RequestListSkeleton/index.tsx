const RequestListSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col  gap-4 px-4 animate-skeleton">
      <div className="w-full flex justify-end items-center gap-2">
        <div className="w-[120px] h-[20px] rounded-md bg-impo_Neutral_Surface" />
        <div className=" w-12 h-12  min-w-12 min-h-12 rounded-full bg-impo_Neutral_Surface" />
      </div>

      <div className="w-[200px] h-[20px] rounded-md bg-impo_Neutral_Surface" />
    </div>
  );
};

export default RequestListSkeleton;
