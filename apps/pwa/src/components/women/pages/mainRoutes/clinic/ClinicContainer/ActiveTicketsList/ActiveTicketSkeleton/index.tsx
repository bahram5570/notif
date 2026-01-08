const ActiveTicketSkeleton = () => {
  const list = [1, 2, 3, 4];

  return (
    <div className="w-full flex flex-col gap-3 animate-skeleton">
      {list.map((item) => (
        <div className="w-full h-32 rounded-xl bg-impo_Neutral_Surface" key={item} />
      ))}
    </div>
  );
};

export default ActiveTicketSkeleton;
