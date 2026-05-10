const SpecialistCommentsSkeleton = () => {
  const list = [1, 2, 3];

  return (
    <div className="w-full flex flex-col items-center gap-2 pt-5 p-4 animate-skeleton">
      <div className="w-[120px] h-[120px] rounded-full bg-impo_Neutral_Surface" />
      <div className="w-[200px] h-[16px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-[180px] h-[16px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-[100px] h-[16px] rounded-md bg-impo_Neutral_Surface" />

      <div className="w-[120px] h-[16px] rounded-md ml-auto mt-7 bg-impo_Neutral_Surface" />

      {list.map((i) => (
        <div className="w-full h-[120px] rounded-md bg-impo_Neutral_Surface" key={i} />
      ))}
    </div>
  );
};

export default SpecialistCommentsSkeleton;
